const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/index.js');

const app = express();
const port = process.env.PORT || 3001;

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.get('/api/photos/', (req, res) => {
  db.retrieve(null, (data) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.status(200).send(data);
  });
});

app.listen(port, () => {
  console.log(`Listening to port: ${port}`);
});
