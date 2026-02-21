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

const SYSTEM_PROMPT =
  "You are a coding assistant for kids. Generate complete, runnable HTML pages with inline CSS and JS. Keep code simple and fun. Always include visual output. Never use external dependencies. Return ONLY the HTML code, no explanations or markdown code fences.";

module.exports = async function handler(req, res) {
  // CORS preflight
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  // Rate limit: 20 requests per minute per IP
  const ip = req.headers["x-forwarded-for"] || req.socket?.remoteAddress || "unknown";
  if (!checkRateLimit(ip, 20)) {
    return res.status(429).json({ error: "Too many requests. Please wait a moment and try again." });
  }

  try {
    const { prompt, currentCode } = req.body;

    if (!prompt || typeof prompt !== "string" || prompt.trim().length === 0) {
      return res.status(400).json({ error: "Please describe what you want to create or change." });
    }

    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      console.error("ANTHROPIC_API_KEY is not configured");
      return res.status(500).json({ error: "The AI service is not configured. Please contact your teacher." });
    }

    const client = new Anthropic({ apiKey });

    const messages = [];

    if (currentCode) {
      messages.push({
        role: "user",
        content: `Here is my current code:\n\n${currentCode}`,
      });
      messages.push({
        role: "assistant",
        content: "I can see your current code. What changes would you like me to make?",
      });
    }

    messages.push({
      role: "user",
      content: prompt.trim(),
    });

    const response = await client.messages.create({
      model: "claude-sonnet-4-20250514",
      max_tokens: 4096,
      system: SYSTEM_PROMPT,
      messages,
    });

    const code = response.content
      .filter((block) => block.type === "text")
      .map((block) => block.text)
      .join("");

    return res.status(200).json({ code });
  } catch (err) {
    console.error("Code API error:", err);

    if (err.status === 401) {
      return res.status(500).json({ error: "The AI service key is invalid. Please contact your teacher." });
    }
    if (err.status === 429) {
      return res.status(429).json({ error: "The AI is too busy right now. Please wait a moment and try again." });
    }
    if (err.status === 529) {
      return res.status(503).json({ error: "The AI service is temporarily overloaded. Please try again later." });
    }

    return res.status(500).json({ error: "Something went wrong generating code. Please try again." });
  }
};
