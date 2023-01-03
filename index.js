const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Testing availability...');
  console.log("Testing console...")
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.post('/',(req,res) => {
  console.log(req.headers);
  console.log(req.body);
  return res.send(req.headers + ">>>>>>>>>>>>>>>>>>>>" + req.body);
});