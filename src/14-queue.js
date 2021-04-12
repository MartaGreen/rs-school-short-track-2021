// const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.firstElem = null;
    this.queueLength = 0;
  }

  get size() {
    return this.queueLength;
  }

  enqueue(element) {
    if (this.queueLength === 0) this.firstElem = { value: element, next: null };
    else {
      let { firstElem } = this;

      while (firstElem.next) {
        firstElem = firstElem.next;
      }

      firstElem.next = { value: element, next: null };
    }

    this.queueLength += 1;
  }

  dequeue() {
    const firstElem = this.firstElem.value;
    this.firstElem = this.firstElem.next;
    return firstElem;
  }
}

module.exports = Queue;
