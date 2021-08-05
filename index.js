const {Queue} = require('./Queue');

const q1 = new Queue();
console.log(q1.add(105));
//=>0
console.log(q1.add(106));
//=>1
console.log(q1.add(107));
//=>2
console.log(q1.add(109));
//=>3
console.log(q1)
//=> [105, 106, 107,109]
console.log('remove pos 10 ',q1.removeByPos(10))
//=>false
console.log('remove pos 1 ',q1.removeByPos(1))
//=>true
console.log(q1)
//=> [106, 107,109]
console.log(q1.removeByUserID(108))
//=>false
console.log(q1.removeByUserID(109))
//=>true
console.log(q1)
//=> [106, 107]
console.log(q1.add(110));
//=>2
console.log(q1)
//=> [106, 107,110]
console.log(q1.move(1,2));
//=>true
console.log(q1)
//=> [106, 110,107]
console.log(q1.move(0,2));
//=>true
console.log(q1)
//=> [110, 107,106]
console.log(q1.move(10,2));
//=>false
console.log(q1)
//=> [110, 107,106]
console.log(q1.swap(0,2));
//=>true
console.log(q1)
//=> [106, 107,110]
console.log(q1.swap(10,2));
//=>false
console.log(q1)
//=> [106, 107,110]
console.log(q1.add(114));
//=>3
console.log(q1)
//=> [106, 107,110,114]
console.log(q1.reverse());
//=>true
console.log(q1)
//=> [114,110,107,106]
