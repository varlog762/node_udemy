const express = require('express');

const {
  getUserssHandler,
  postUserssHandler,
  getSingleUserHandler,
} = require('../controllers/users');

const usersRouter = express.Router();

usersRouter.get('/', getUserssHandler);
usersRouter.post('/', postUserssHandler);

usersRouter.get('/:userId', getSingleUserHandler);

module.exports = usersRouter;
