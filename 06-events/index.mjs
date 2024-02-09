import EventEmitter from 'events';

const myEmitter = new EventEmitter();

function timeoutListenerFn(secondsQty) {
  console.log(`Timeout event in ${secondsQty} seconds!`);
}

//Add Event Listener (.on('eventName', callback) or addListener('eventName', callback))
myEmitter.addListener('timeout', timeoutListenerFn);

setTimeout(() => myEmitter.emit('timeout', 1), 1000);
setTimeout(() => myEmitter.emit('timeout', 2), 2000);

myEmitter.once('singleEvent', () => {
  console.log('Single evnt occured');
});

//Listener fuction will be called only once!
setTimeout(() => myEmitter.emit('singleEvent'), 500);
setTimeout(() => myEmitter.emit('singleEvent'), 1500);

//Disable Event Listener for specific event (.off('eventName', callback) or .removeListener('eventName', callback))
setTimeout(() => {
  myEmitter.off('timeout', timeoutListenerFn);
}, 3000);

setTimeout(() => myEmitter.emit('timeout', 1), 4000);
