const myName = 'Gregory';
const myHobbies = ['swiming', 'walking', 'traveling'];
const myFavoriteNumber = 3;

console.log('Text from the multiple-exports CommonJS module');

module.exports.myName = myName;
exports.myHobbies = myHobbies;
exports.myFavoriteNumber = myFavoriteNumber;
