import express from 'express';
import morgan from 'morgan';
// import qs from 'querystring';

const app = express();

// Use Morgan middleware to log incoming HTTP requests
app.use(morgan('combined'));

// Express middleware function for request body JSON parsing
app.use(express.json());

/* Express middleware function for form data parsing
   express.urlencoded({ extended: true }) - uses 'qs' library for parsing form data, supports more features
   express.urlencoded({ extended: false }) - default behavior, uses buil-in module 'querystring'
*/
app.use(express.urlencoded({ extended: true }));

// Example of custom middleware for JSON parsing:
// app.use((req, res, next) => {
//   let data = '';

//   req.on('data', chunk => (data += chunk));
//   req.on('end', () => {
//     const parsedJSON = JSON.parse(data);
//     req.body = parsedJSON;

//     next();
//   });
// });

// Example of custom middleware for form data parsing:
// app.use((req, res, next) => {
//   if (req.headers['content-type'] === 'application/x-www-form-urlencoded') {
//     let data = '';

//     req.on('data', chunk => (data += chunk.toString()));
//     req.on('end', () => {
//       const parsedFormData = qs.parse(data);
//       req.body = parsedFormData;
//       next();
//     });
//   } else {
//     next();
//   }
// });

// Route handler to log and return the parsed request body
app.use((req, res) => {
  console.log(req.body);

  return res.send(req.body);
});

// Route handler to log and return the parsed request body
app.listen(5001, () => console.log('Server started on port 5001'));
