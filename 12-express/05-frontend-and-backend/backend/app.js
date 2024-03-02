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

// Route handler to log and return the parsed request body
app.use((req, res) => {
  console.log(req.body);

  return res.send(req.body);
});

// Route handler to log and return the parsed request body
app.listen(5001, () => console.log('Server started on port 5001'));
