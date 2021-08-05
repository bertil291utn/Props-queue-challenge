const {Queue} = require('./Queue');

const q1 = new Queue();


//appendix test
/*
  ADD,1
ADD,2
ADD,3
ADD,4
ADD,5
ADD,6
REMOVE_USER,2
REMOVE_USER,6
REMOVE_USER,10
MOVE,3,1
REVERSE
SWAP,6,1
REMOVE_POSITION,3
REMOVE_USER,1
REMOVE_POSITION,6
ADD,7
ADD,8
PRINT
*/
q1.add(1);
q1.add(2);
q1.add(3);
q1.add(4);
q1.add(5);
q1.add(6);
q1.removeByUserID(2);
q1.removeByUserID(6);
q1.removeByUserID(10);
q1.move(3,1);
q1.reverse();
q1.swap(6,1);
q1.removeByPos(3);
q1.removeByUserID(1);
q1.removeByPos(6);
q1.add(7);
q1.add(8);
console.log(q1.print())














/*
TEST
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
console.log(q1.print());
*/