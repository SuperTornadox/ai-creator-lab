// In-memory activity log (persists while container is warm)
const activities = [];
const MAX_ACTIVITIES = 500;

module.exports = async function handler(req, res) {
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  // GET: Teacher retrieves activity feed
  if (req.method === "GET") {
    const since = parseInt(req.query.since) || 0;
    const lesson = req.query.lesson || null;

    let filtered = activities.filter((a) => a.timestamp > since);
    if (lesson) {
      filtered = filtered.filter((a) => a.lesson === lesson);
    }

    return res.status(200).json({ activities: filtered, serverTime: Date.now() });
  }

  // POST: Student logs activity
  if (req.method === "POST") {
    const { student, type, content, response, lesson } = req.body;

    if (!student || !type) {
      return res.status(400).json({ error: "Missing student or type" });
    }

    const entry = {
      id: Date.now() + "-" + Math.random().toString(36).slice(2, 6),
      student: String(student).slice(0, 50),
      type: String(type).slice(0, 20),
      content: String(content || "").slice(0, 500),
      response: String(response || "").slice(0, 500),
      lesson: String(lesson || "unknown").slice(0, 30),
      timestamp: Date.now(),
    };

    activities.push(entry);

    // Keep only recent entries
    while (activities.length > MAX_ACTIVITIES) {
      activities.shift();
    }

    return res.status(200).json({ ok: true });
  }

  return res.status(405).json({ error: "Method not allowed" });
};
