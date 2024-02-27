const express = require('express');

const usersRouter = express.Router();

const getUserssHandler = (req, res) => res.send('Get users route');
const postUserssHandler = (req, res) => res.send('Post users route');

const getSingleUserHandler = (req, res) => {
  res.send(`Get user with ID ${req.params.userId}`);
};

usersRouter.get('/', getUserssHandler);
usersRouter.post('/', postUserssHandler);

usersRouter.get('/:userId', getSingleUserHandler);

module.exports = usersRouter;
