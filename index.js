const express = require('express');
const request = require('request');

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/jokes/random', (req, res) => {
  request(
    { url: 'https://api.frontendexpert.io/api/fe/wordle-words' },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: err.message });
      }

      res.json(JSON.parse(body));
    }
  )
});


const spanishWords = ["ANSIA", "ANION", "ANIMO", "MACRO", "GAFAS"]

app.get('/spanish', (req, res) => {
  res.json(spanishWords)
})

// app.get


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));