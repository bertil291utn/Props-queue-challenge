class LinkedList {
  constructor() {
    this.list = [];
  }

  add(data) {
    return this.list.push(data) - 1;
  }

  // get(index) {
  //   this.list[index];
  // }

  // add_at(index, item) {
  //   this.list.splice(index, 0, item);
  // }

  removeByPos(position) {
    this.list.splice(position - 1, 1);
    return true;
  }

  removeByUserID(userID) {
    const index = this.list.indexOf(userID);
    if (index == -1) return false;
    this.list.splice(index, 1);
    return true;
  }

  move(fromIndex, toIndex) {
    const element = this.list[fromIndex];
    if (!element) return false;
    this.list.splice(fromIndex, 1);
    this.list.splice(toIndex, 0, element);
    return true;
  }
}

module.exports = {
  LinkedList,
};
