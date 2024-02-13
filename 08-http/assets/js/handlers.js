const comments = require('./data');
const fs = require('fs');
const qs = require('querystring');

function getHome(req, res) {
  fs.readFile('./assets/html/comment-form.html', (err, data) => {
    if (err) {
      res.statusCode = 500;
      res.end(err.message);
    } else {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      res.end(data);
    }
  });
}
function getHTML(req, res, message) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.write('<html><body><div>');
  res.write(`<h1>${message}</h1>`);
  res.write('</div></body></html>');

  res.end();
}

function getText(req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  res.end('This is plain text');
}

function getComments(req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');

  res.end(JSON.stringify(comments));
}

function postComment(req, res) {
  res.setHeader('Content-Type', 'text/plain');

  if (req.headers['content-type'] === 'application/x-www-form-urlencoded') {
    let body = '';

    req.on('data', chunk => (body += chunk.toString()));

    req.on('end', () => {
      try {
        const comment = qs.parse(body);
        comment.id = parseInt(comment.id);
        comments.push(comment);
        res.statusCode = 200;
        res.setHeader('Content-type', 'text/html');
        res.write('<h1>Comment data was recieved</h1>');
        res.write('<a href="/">Submit one more comment</a>');
        res.end();
      } catch (error) {
        res.statusCode = 400;
        res.end(error.message);
      }
    });
  } else if (req.headers['content-type'] === 'application/json') {
    let commentJSON = '';

    req.on('data', chunk => (commentJSON += chunk));

    req.on('end', () => {
      try {
        comments.push(JSON.parse(commentJSON));
        res.statusCode = 200;
        res.end('Comment data was recieved');
      } catch (error) {
        res.statusCode = 400;
        res.end(error.message);
      }
    });
  } else {
    res.statusCode = 400;
    res.end('Data must be in the JSON format or as form');
  }
}

function notFound(req, res) {
  res.statusCode = 404;
  res.setHeader('Content-Type', 'text/html');
  res.write('<html><body><div>');
  res.write('<h1>Page not found =(</h1>');
  res.write('</div></body></html>');

  res.end();
}

module.exports = {
  getHome,
  getHTML,
  getText,
  getComments,
  postComment,
  notFound,
};
