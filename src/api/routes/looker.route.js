const express = require("express");
const { LookerNodeSDK } = require("@looker/sdk-node");

const router = express.Router();

// responsável por passar as credenciais para acessar a API
const config = {
  readConfig() {
    return {
      client_id: "YsYTJ9Hx3gY2NCftw8Xb",
      client_secret: "NZqr4m7S8TmytSfmZhv5WFDt",
    };
  },
  base_url: "https://clusterdesign.cloud.looker.com",
};

const sdk = LookerNodeSDK.init40(config);

// rota responsável por retornar o access token para acessar a API
router.get("/token", async (req, res) => {
  const userId = await sdk.ok(sdk.me("id"));
  const accessToken = await sdk.login_user(userId.id);
  console.log("accessToken", accessToken);

  const { error } = accessToken || {};

  if (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: error?.message });
  }

  const user = {
    user_token: accessToken.value,
    token_last_refreshed: Date.now(),
  };
  res.json({ ...user });
});

module.exports = router;
