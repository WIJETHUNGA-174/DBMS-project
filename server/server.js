const express = require('express');
const app = express();
const cors = require('cors');
const connection = require('./db');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
})
app.post

app.listen(4000, () => {
    console.log('Server is running on port 4000');
})
