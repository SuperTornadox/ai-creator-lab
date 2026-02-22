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
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const ip = req.headers["x-forwarded-for"] || req.socket?.remoteAddress || "unknown";
  if (!checkRateLimit(ip, 20)) {
    return res.status(429).json({ error: "Too many requests. Please wait a moment and try again." });
  }

  try {
    const { prompt, currentCode } = req.body;

    if (!prompt || typeof prompt !== "string" || prompt.trim().length === 0) {
      return res.status(400).json({ error: "Please describe what you want to create or change." });
    }

    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ error: "The AI service is not configured. Please contact your teacher." });
    }

    const messages = [{ role: "system", content: SYSTEM_PROMPT }];

    if (currentCode) {
      messages.push({ role: "user", content: `Here is my current code:\n\n${currentCode}` });
      messages.push({ role: "assistant", content: "I can see your current code. What changes would you like me to make?" });
    }

    messages.push({ role: "user", content: prompt.trim() });

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        max_tokens: 4096,
        messages,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("OpenAI API error:", data);
      return res.status(500).json({ error: "AI service error", debug: JSON.stringify(data) });
    }

    const code = data.choices?.[0]?.message?.content || "";
    return res.status(200).json({ code });
  } catch (err) {
    console.error("Code API error:", err);
    return res.status(500).json({ error: "Something went wrong generating code. Please try again.", debug: err.message });
  }
};
