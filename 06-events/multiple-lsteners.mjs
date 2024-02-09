import EventEmitter from 'events';

const myEmitter = new EventEmitter();

myEmitter.on('myEvent', () => console.log('First event listener'));
myEmitter.on('myEvent', () => console.log('Second event listener'));

myEmitter.on('otherEvent', () => console.log('Other event'));

console.log(myEmitter.getMaxListeners()); //default - 10

//We can increase the maximum number of event listeners
myEmitter.setMaxListeners(25);
console.log(myEmitter.getMaxListeners());

console.log(myEmitter.eventNames());

myEmitter.emit('myEvent');
