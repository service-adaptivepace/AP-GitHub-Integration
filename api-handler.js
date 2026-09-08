// Routes game requests to the correct provider URL

const providers = {
  driftking: "https://provider-a.example.com/games",
  luckyspin: "https://provider-b.example.com/games"
};

function getGameUrl(providerName, gameId) {
  return providers[providerName] + "/" + gameId;
}

module.exports = { getGameUrl };
