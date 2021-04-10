const EventEmmiter = require('events').EventEmitter;

class Liquid extends EventEmmiter {};
class Honey{};

let liquid = new Liquid();

liquid.on('drop', (item) => {
    if (item instanceof Honey) {
        console.log('Sweet Honey!');
    }
    else{
        console.log(`Just dropped ${item} now!`);
    }
});

liquid.emit('drop', 'water');
const honey = new Honey();
liquid.emit('drop', honey);