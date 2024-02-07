const { myName, myHobbies, myFavoriteNumber } = require('./multiple-exports');
const exportedObject = require('./multiple-exports');
const greetingFn = require('./my-modules/single-export');
const {
  myName: myNewName,
  myFriendsName,
  myGreatHobbies,
} = require('./export-and-import');

console.log(myFavoriteNumber, myHobbies, myName);

greetingFn(myName);

console.log(myNewName, myFriendsName);

myHobbies.push('programming');

console.log(myHobbies);
console.log(myGreatHobbies);
