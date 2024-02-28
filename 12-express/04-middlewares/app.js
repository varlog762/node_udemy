import express from 'express';

const app = express();

const logger = (req, res, next) => {
  console.log(req.method, req.path);
  next();
};

app.use(logger);

app.use((req, res) => res.send('This is Express server!'));

app.listen(5001, () => console.log('Server started on port 5001'));
