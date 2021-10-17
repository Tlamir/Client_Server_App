const express = require("express");
const CoinGecko = require('coingecko-api');
const CoinGeckoClient = new CoinGecko();

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api", async (req, res) => {
    let solPrice= await func();
    res.json({ message: "Hello from server This is a client server app $Solana price is: " +solPrice+" USD"});
  });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

var func = async() => {
    let data = await CoinGeckoClient.simple.price({
        ids: ['solana','bitcoin'],
        vs_currencies: ['usd'],
    });
    return(data.data.solana.usd);
  };