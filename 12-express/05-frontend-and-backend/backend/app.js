import express from 'express';

import morgan from 'morgan';
import cors from 'cors';
// import qs from 'querystring';

const app = express();

// Use Morgan middleware to log incoming HTTP requests
app.use(morgan('tiny'));

// Express middleware function for request body JSON parsing
app.use(express.json());

/* Express middleware function for form data parsing
   express.urlencoded({ extended: true }) - uses 'qs' library for parsing form data, supports more features
   express.urlencoded({ extended: false }) - default behavior, uses buil-in module 'querystring'
*/
app.use(express.urlencoded({ extended: true }));

// Enable all cors requests
app.use(cors());

// Route handler to log and return the parsed request body
app.use((req, res) => {
  const personData = {
    name: 'Gregory',
    isAdmin: true,
  };

  // Converts JS object to JSON & sends response containing object back to the client
  return res.json(personData);
});

// Route handler to log and return the parsed request body
app.listen(5001, () => console.log('Server started on port 5001'));
