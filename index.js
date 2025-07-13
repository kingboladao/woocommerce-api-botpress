const express = require("express");
const axios = require("axios");
const app = express();

const PORT = process.env.PORT || 10000;

const woocommerceURL = "https://kingstreetpe.com/wp-json/wc/v3/products";
const consumerKey = "ck_fe87ffeadb81d594bac5206a52eead4abf8a5669";
const consumerSecret = "cs_3ab6bba34de321daba375b2e5ee8ef1e88217552";

app.get("/products", async (req, res) => {
  try {
    const response = await axios.get(woocommerceURL, {
      auth: {
        username: consumerKey,
        password: consumerSecret,
      },
    });

    res.json(response.data);
  } catch (error) {
    console.error("Erro ao buscar produtos:", error.message);
    res.status(500).json({ error: "Erro ao buscar produtos", message: error.message });
  }
});

app.get("/", (req, res) => {
  res.send("API WooCommerce rodando!");
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
