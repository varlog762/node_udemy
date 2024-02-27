const getCommentsHandler = (req, res) => res.send('Get comments route');
const postCommentsHandler = (req, res) => res.send('Post comments route');

const getSingleCommentHandler = (req, res) => {
  // console.log(req.params);
  res.send(`Get comment route, comment ID: ${req.params.commentId}`);
};
const deleteSingleCommentHandler = (req, res) => {
  res.send(`The comment with ID ${req.params.commentId} was deleted`);
};

module.exports = {
  getCommentsHandler,
  postCommentsHandler,
  getSingleCommentHandler,
  deleteSingleCommentHandler,
};
