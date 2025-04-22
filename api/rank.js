export default async function handler(req, res) {
  try {
    const response = await fetch("https://api.henrikdev.xyz/valorant/v1/mmr/eu/mimenc/1234");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();

    const rank = data.data.currenttierpatched;
    const rr = data.data.ranking_in_tier;

    res.setHeader('Content-Type', 'text/plain');
    res.send(`🎮 mimenc#1234 — ${rank} (${rr} RR)`);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
