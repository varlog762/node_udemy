const express = require('express');

const {
  getCommentsHandler,
  postCommentsHandler,
  getSingleCommentHandler,
  deleteSingleCommentHandler,
} = require('../controllers/comments');

const commentsRouter = express.Router();

commentsRouter.get('/', getCommentsHandler);
commentsRouter.post('/', postCommentsHandler);

// Example with route params
commentsRouter.get('/:commentId', getSingleCommentHandler);
commentsRouter.delete('/:commentId', deleteSingleCommentHandler);

module.exports = commentsRouter;
