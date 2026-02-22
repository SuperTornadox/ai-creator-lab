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
  if (!checkRateLimit(ip, 30)) {
    return res.status(429).json({ error: "Too many requests. Please wait a moment and try again." });
  }

  try {
    const { messages, system } = req.body;

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ error: "Please provide a messages array with at least one message." });
    }

    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ error: "The AI service is not configured. Please contact your teacher." });
    }

    const openaiMessages = [];
    if (system) {
      openaiMessages.push({ role: "system", content: system });
    }
    for (const msg of messages) {
      openaiMessages.push({ role: msg.role, content: msg.content });
    }

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        max_tokens: 1024,
        messages: openaiMessages,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("OpenAI API error:", data);
      if (response.status === 401) {
        return res.status(500).json({ error: "The AI service key is invalid. Please contact your teacher." });
      }
      if (response.status === 429) {
        return res.status(429).json({ error: "The AI is too busy right now. Please wait a moment and try again." });
      }
      return res.status(500).json({ error: "AI service error", debug: JSON.stringify(data) });
    }

    const text = data.choices?.[0]?.message?.content || "";
    return res.status(200).json({ response: text });
  } catch (err) {
    console.error("Chat API error:", err);
    return res.status(500).json({ error: "Something went wrong talking to the AI. Please try again.", debug: err.message || String(err) });
  }
};
