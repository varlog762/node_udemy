const express = require('express');

const commentsRouter = require('./routes/comments');
const usersRouter = require('./routes/users');

const app = express();

const getRootHandler = (req, res) => res.send('Get root route');

app.get('/', getRootHandler);

app.use('/comments', commentsRouter);
app.use('/users', usersRouter);

app.listen(5001, () => console.log('Server started on port 5001'));
