const http = require('http');

const {
  getHome,
  getHTML,
  getText,
  getComments,
  postComment,
  notFound,
} = require('./assets/js/handlers');

const PORT = 5001;

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    return getHome(req, res);
  }

  if (req.method === 'GET' && req.url === '/html') {
    return getHTML(req, res, 'Some HTML');
  }

  if (req.method === 'GET' && req.url === '/text') {
    return getText(req, res);
  }

  if (req.method === 'GET' && req.url === '/comments') {
    return getComments(req, res);
  }

  if (req.method === 'POST' && req.url === '/comments') {
    return postComment(req, res);
  }

  return notFound(req, res);
});

server.listen(PORT, () => console.log(`Server started on port ${PORT}`));
