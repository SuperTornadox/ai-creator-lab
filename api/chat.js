const Anthropic = require("@anthropic-ai/sdk");

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

  // Rate limit: 30 requests per minute per IP
  const ip = req.headers["x-forwarded-for"] || req.socket?.remoteAddress || "unknown";
  if (!checkRateLimit(ip, 30)) {
    return res.status(429).json({ error: "Too many requests. Please wait a moment and try again." });
  }

  try {
    const { messages, system } = req.body;

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ error: "Please provide a messages array with at least one message." });
    }

    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      console.error("ANTHROPIC_API_KEY is not configured");
      return res.status(500).json({ error: "The AI service is not configured. Please contact your teacher." });
    }

    const client = new Anthropic({ apiKey });

    const requestParams = {
      model: "claude-sonnet-4-20250514",
      max_tokens: 1024,
      messages,
    };

    if (system) {
      requestParams.system = system;
    }

    const response = await client.messages.create(requestParams);

    const text = response.content
      .filter((block) => block.type === "text")
      .map((block) => block.text)
      .join("");

    return res.status(200).json({ response: text });
  } catch (err) {
    console.error("Chat API error:", err);

    if (err.status === 401) {
      return res.status(500).json({ error: "The AI service key is invalid. Please contact your teacher." });
    }
    if (err.status === 429) {
      return res.status(429).json({ error: "The AI is too busy right now. Please wait a moment and try again." });
    }
    if (err.status === 529) {
      return res.status(503).json({ error: "The AI service is temporarily overloaded. Please try again later." });
    }

    return res.status(500).json({ error: "Something went wrong talking to the AI. Please try again." });
  }
};
