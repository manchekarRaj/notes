const events = require("events");

function createEmitter(onOpen, onClose) {
    class MyEmitter extends events { }
    const myEmitter = new MyEmitter()

    if (!!onOpen && (onOpen() === 'Opened!')) {
        myEmitter.on('onOpen', () => {
            console.log('Opened!')

        })

        myEmitter.emit('Opened!')
    }

    if (!!onClose && (onClose() === 'Closed!')) {
        myEmitter.off('onClose', () => {
            console.log('Closed!')
        })

        myEmitter.emit('Closed!')
    }
}

function opened(emitter) {
   console.log(emitter)
}
function closed(emitter) {
   console.log(emitter)

}

let emitter = createEmitter(() => console.log("Opened!"), () => console.log("Closed!"));
opened(emitter);
closed(emitter);

module.exports.createEmitter = createEmitter;
module.exports.opened = opened;
module.exports.closed = closed;