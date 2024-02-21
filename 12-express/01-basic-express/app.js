const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Response from Express');
});

app.listen(5001, () => console.log('Server started on port 5001'));
