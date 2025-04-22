export default async function handler(req, res) {
  const response = await fetch("https://api.henrikdev.xyz/valorant/v1/mmr/eu/mimenc/1234");
  const data = await response.json();

  const rank = data.data.currenttierpatched;
  const rr = data.data.ranking_in_tier;

  res.setHeader('Content-Type', 'text/plain');
  res.send(`🎮 mimenc#1234 — ${rank} (${rr} RR)`);
}
