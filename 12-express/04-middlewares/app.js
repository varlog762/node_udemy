import express from 'express';
import morgan from 'morgan';

const app = express();

app.use(morgan('combined'));

app.use((req, res) => res.send('This is Express server!'));

app.listen(5001, () => console.log('Server started on port 5001'));
