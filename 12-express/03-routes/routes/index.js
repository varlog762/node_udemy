const express = require('express');

const rootRouter = require('./root');
const commentsRouter = require('./comments');
const usersRouter = require('./users');

const router = express.Router();

router.use('/comments', commentsRouter);
router.use('/users', usersRouter);
router.use('/', rootRouter);

module.exports = router;
