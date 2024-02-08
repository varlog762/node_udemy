const fs = require('fs');

fs.writeFile('./first.txt', 'Hello from node.js', err => {
  if (err) {
    console.log(err);
  } else {
    console.log('File was writen!');
    fs.appendFile('./first.txt', '\nOne more line', err => {
      if (err) {
        console.log(err);
      } else {
        console.log('Append text to the first.txt file');
        fs.rename('./first.txt', './renamedFirst.txt', err => {
          if (err) {
            console.log(err);
          } else {
            console.log('File was renamed!');
          }
        });
      }
    });
  }
});
