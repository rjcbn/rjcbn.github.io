const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.status(200);
  res.send('Testing availability...');
  console.log("Testing console...");
});

app.use(express.json({ type: ['text/*', '*/json'] }));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.post('/',(req,res) => {
  var message = JSON.stringify(req.headers) + " >>> " + JSON.stringify(req.body);
  console.log(message);
  res.status(200);
  res.json(message);
});