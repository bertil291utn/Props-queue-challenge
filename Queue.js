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


}

module.exports = {
  Queue,
};
