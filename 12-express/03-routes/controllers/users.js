const getUserssHandler = (req, res) => res.send('Get users route');
const postUserssHandler = (req, res) => res.send('Post users route');

const getSingleUserHandler = (req, res) => {
  res.send(`Get user with ID ${req.params.userId}`);
};

module.exports = {
  getUserssHandler,
  postUserssHandler,
  getSingleUserHandler,
};
