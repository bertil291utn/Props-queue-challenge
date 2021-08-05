const {LinkedList} = require('./LinkedList');

class Queue {
  constructor() {
    this.queue = new LinkedList();
  }

  add(userID) {
    return this.queue.add(userID);
  }

  removeByPos(position) {
    return this.queue.removeByPos(position);
  }

  removeByUserID(userID) {
    return this.queue.removeByUserID(userID);
  }

  move(from,to) {
    return this.queue.move(from,to);
  }

  swap(pos1,pos2) {
    return this.queue.swap(pos1,pos2);
  }

  reverse() {
    return this.queue.reverse();
  }


}

module.exports = {
  Queue,
};
