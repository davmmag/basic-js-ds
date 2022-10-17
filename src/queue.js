const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

//enqueue = put добавляет в конец очереди
//dequeue = pick извлекает из начала

class Queue {
  constructor() {
    this.list = {};
  }
  getUnderlyingList() {
    return this.list;
  }
  enqueue(value) {
    let list = this.list;
    const element = { value, next: null };
    if (!list.value) {
      list.value = value;
      list.next = null;
    } else {
      let prevNode = list;
      let currentNode = list.next;
      if (currentNode !== null) {
        while (currentNode !== null) {
          prevNode = currentNode;
          currentNode = currentNode.next;
        }
        currentNode = element;
        prevNode.next = currentNode;
      } else {
        prevNode.next = element;
      }
    }
  }
  dequeue() {
    let first = this.list;
    if (!first) { return null; }
    let nextNode = first.next;
    this.list = nextNode;
    return first.value;
  }
}

module.exports = {
  Queue
};
