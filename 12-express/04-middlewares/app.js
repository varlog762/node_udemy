import express from 'express';
import morgan from 'morgan';
import qs from 'querystring';

const app = express();

app.use(morgan('combined'));

// Express middleware function for request body JSON parsing
app.use(express.json());

// Myown middleware function for request body JSON parsing
// app.use((req, res, next) => {
//   let data = '';

//   req.on('data', chunk => (data += chunk));
//   req.on('end', () => {
//     const parsedJSON = JSON.parse(data);
//     req.body = parsedJSON;

//     next();
//   });
// });

app.use((req, res, next) => {
  if (req.headers['content-type'] === 'application/x-www-form-urlencoded') {
    let data = '';

    req.on('data', chunk => (data += chunk.toString()));
    req.on('end', () => {
      const parsedFormData = qs.parse(data);
      req.body = parsedFormData;
      next();
    });
  } else {
    next();
  }
});

app.use((req, res) => {
  console.log(req.body);

  return res.send(req.body);
});

app.listen(5001, () => console.log('Server started on port 5001'));
