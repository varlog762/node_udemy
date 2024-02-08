import { season, temperature } from './named-exports.mjs';
import { humidity, isRaining } from './inline-exports.mjs';
import getData from './default-exports.mjs';
import DEFAULT_SERVER, {
  USERNAME as MY_USERNAME,
  PASS,
} from './mixed-exports.mjs';

console.log(season, temperature);
console.log(humidity, isRaining);

getData('https://jsonplaceholder.typicode.com/posts/1')
  .then(data => console.log(data))
  .catch(error => console.log(error));

console.log(DEFAULT_SERVER);
console.log(MY_USERNAME, PASS);
