const fsPromise = require('fs/promises');

fsPromise
  .writeFile('./firstPromise.txt', 'Write first line with promise')
  .then(() =>
    fsPromise.appendFile(
      './firstPromise.txt',
      '\nAppend second line with promse'
    )
  )
  .then(() =>
    fsPromise.rename('./firstPromise.txt', './renamedFirstPromise.txt')
  )
  .then(() => console.log('File writed with promises!'))
  .catch(err => console.log(err));
