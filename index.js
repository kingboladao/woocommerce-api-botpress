const express = require('express');
const axios = require('axios');
const app = express();

const PORT = process.env.PORT || 3000;

const wooUrl = 'https://seudominio.com/wp-json/wc/v3/products'; // troque pelo seu domínio Woo
const consumerKey = 'ck_aa92a6f693d98f81df12c77980d42edb6372264';
const consumerSecret = 'cs_f00d2a16de295fd2cc3a03a0bd0e4b1e4c2f10d2';

app.get('/', (req, res) => {
  res.send('API está online!');
});

app.get('/products', async (req, res) => {
  try {
    const response = await axios.get(wooUrl, {
      auth: {
        username: consumerKey,
        password: consumerSecret
      }
    });
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar produtos', message: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
