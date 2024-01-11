console.log('a');
setTimeout(() => console.log('set timeout..'), 0); //
Promise.resolve(() => console.log('promise resolved..')).then((res) => res())
console.log('b')

//setTimeout is not part of javascript, it is a part of web apis, its part of our browser. So set time out code run after all the code in javascript file runs successfully. It goes inside the task queue.

// Promise are executed after all the blocking code is executed, it is handled by micro task queue.

// microtask queue has higher priority then the task queue, so Promise will resolve first.