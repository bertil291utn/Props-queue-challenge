const {Queue} = require('./Queue');

const q1 = new Queue();
console.log(q1.add(105));
//=>0
console.log(q1.add(106));
//=>1
console.log(q1.add(107));
//=>2
console.log(q1)
//=> [105, 106, 107]
console.log(q1.removeByPos(1))
//=>true

console.log(q1)
//=> [105, 107]

