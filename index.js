const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

// Endpoint GET que retorna o timestamp do momento e o IP
app.get('/ts', (req, res) => {
  const timestamp = Date.now();
  const ip = req.ip;
  res.json({ timestamp, ip });
});

// Endpoint POST que retorna a quantidade de letras na frase do corpo da requisição
app.post('/contador', (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ error: 'A propriedade "name" no corpo da requisição é obrigatória.' });
  }

  const letterCount = name.replace(/ /g, '').length;
  res.json({ letterCount });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
