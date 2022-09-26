const express = require('express');
const fs = require('fs');
const cors = require('cors')

const app = express();
app.use(cors());

const DATA_FILE = './data/daily_consumption.json'

app.get('/read', function (req, res) {
  const data = fs.readFileSync(DATA_FILE, { encoding:'utf8' });
  console.log('read request received', new Date(Date.now()).toISOString());
  res.send(data);
});

app.listen('3333', function () {
  console.log('server started on port 3333');
});
