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
    const response=this.list.splice(position - 1, 1);
    if(response.length==0) return false;
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

  swap(pos1,pos2){
    const temp = this.list[pos1];
    if(!temp||!this.list[pos2]) return false;
    this.list[pos1] = this.list[pos2];
    this.list[pos2] = temp;
    return true;
  }

  reverse(){
    if(this.list.length==0) return false;
    this.list.reverse();
    return true;
  }
}

module.exports = {
  LinkedList,
};
