const express = require('express');

const app = express();

const fistHandler = (req, res, next) => {
  console.log('first handler');
  next();
};
const secondHandler = (req, res) => {
  console.log('Second handler');
  res.send('Response from express');
};

app.get('/', fistHandler, secondHandler);

app.listen(5001, () => console.log('Server started on port 5001'));
