const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('../database/index.js');

const app = express();
const port = process.env.PORT || 3001;

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.get('/api/photos/:offering', (req, res) => {
  // I expect this to show in my terminal
  console.log('You pinged the server with Postman!');

  // Manually add the offering_id here
  let id = 1036;
  db.retrieve(null, (data) => {
    console.log('Data from database: ', data);
    res.status(200).send(data);
  });
});

// app.get('/api/photos/:offering', (req, res) => {
//   db.retrieve(null, (data) =>{
//     console.log(data);
//     res.send(data);
//   })
// });

app.listen(port, () => {
  console.log(`Listening to port: ${port}`);
});
