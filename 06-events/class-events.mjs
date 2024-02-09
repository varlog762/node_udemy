import EventEmitter from 'events';

class Post extends EventEmitter {
  constructor(author, text) {
    super();
    this.author = author;
    this.text = text;
    this.likesQty = 0;
    this.on('likePost', username =>
      console.log(`${username} likes your post!`)
    );
    this.on('error', error => console.log(error));
  }

  like(username) {
    if (!username) {
      return this.emit('error', new Error('No username in the like request'));
    }
    this.likesQty += 1;
    this.emit('likePost', username);
  }
}

const myPost = new Post('Greg', 'Some text');
// myPost.on('likePost', username => console.log(`${username} likes your post!`));

// console.log(myPost.author);
// console.log(myPost.text);
// console.log(myPost.likesQty);

myPost.like('alice');
setTimeout(() => myPost.like(), 1000);
setTimeout(() => myPost.like('ales'), 2000);
// console.log(myPost.likesQty);
