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
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const ip = req.headers["x-forwarded-for"] || req.socket?.remoteAddress || "unknown";
  if (!checkRateLimit(ip, 10)) {
    return res.status(429).json({ error: "Too many requests. Please wait a moment and try again." });
  }

  try {
    const { prompt, size, style } = req.body;

    if (!prompt || typeof prompt !== "string" || prompt.trim().length === 0) {
      return res.status(400).json({ error: "Please describe the image you want to create." });
    }

    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ error: "The AI service is not configured. Please contact your teacher." });
    }

    const response = await fetch("https://api.openai.com/v1/images/generations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "dall-e-3",
        prompt: prompt.trim(),
        n: 1,
        size: size || "1024x1024",
        style: style || "vivid",
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("OpenAI Image API error:", data);
      if (data.error?.code === "content_policy_violation") {
        return res.status(400).json({ error: "That image description isn't allowed. Try something different!" });
      }
      return res.status(500).json({ error: "Image generation failed", debug: JSON.stringify(data) });
    }

    const url = data.data?.[0]?.url || "";
    return res.status(200).json({ url });
  } catch (err) {
    console.error("Image API error:", err);
    return res.status(500).json({ error: "Something went wrong generating the image. Please try again.", debug: err.message });
  }
};
