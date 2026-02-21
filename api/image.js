const OpenAI = require("openai");

// Simple in-memory rate limiter (resets on cold start)
const rateLimit = new Map();

function checkRateLimit(ip, maxPerMinute) {
  const now = Date.now();
  const windowMs = 60000;
  if (!rateLimit.has(ip)) rateLimit.set(ip, []);
  const timestamps = rateLimit.get(ip).filter((t) => now - t < windowMs);
  if (timestamps.length >= maxPerMinute) return false;
  timestamps.push(now);
  rateLimit.set(ip, timestamps);
  return true;
}

module.exports = async function handler(req, res) {
  // CORS preflight
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  // Rate limit: 10 requests per minute per IP
  const ip = req.headers["x-forwarded-for"] || req.socket?.remoteAddress || "unknown";
  if (!checkRateLimit(ip, 10)) {
    return res.status(429).json({ error: "Too many image requests. Please wait a moment and try again." });
  }

  try {
    const { prompt, size, style } = req.body;

    if (!prompt || typeof prompt !== "string" || prompt.trim().length === 0) {
      return res.status(400).json({ error: "Please provide a prompt describing the image you want." });
    }

    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      console.error("OPENAI_API_KEY is not configured");
      return res.status(500).json({ error: "The image service is not configured. Please contact your teacher." });
    }

    const client = new OpenAI({ apiKey });

    const response = await client.images.generate({
      model: "dall-e-3",
      prompt: prompt.trim(),
      n: 1,
      size: size || "1024x1024",
      style: style || "vivid",
    });

    const imageUrl = response.data[0]?.url;
    if (!imageUrl) {
      return res.status(500).json({ error: "The image was generated but no URL was returned. Please try again." });
    }

    return res.status(200).json({ url: imageUrl });
  } catch (err) {
    console.error("Image API error:", err);

    if (err.status === 401) {
      return res.status(500).json({ error: "The image service key is invalid. Please contact your teacher." });
    }
    if (err.status === 429) {
      return res.status(429).json({ error: "The image service is too busy right now. Please wait a moment and try again." });
    }
    if (err.code === "content_policy_violation") {
      return res.status(400).json({ error: "That prompt isn't allowed. Try describing something different!" });
    }
    if (err.code === "billing_hard_limit_reached") {
      return res.status(503).json({ error: "The image service has reached its usage limit. Please contact your teacher." });
    }

    return res.status(500).json({ error: "Something went wrong creating the image. Please try again." });
  }
};
