import { Node } from "./Node.js";

class Queue {
  constructor(){
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() {
    console.log(this.first)
  }
  enqueue(value) {
    const newNode = new Node(value);

    if (this.first === null) {
      this.first = this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
  }
  dequeue() {
    if (!this.first) {
      return null;
    }
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.length--;
  }

  isEmpty() {
    if (this.length === 0) {
      console.log("Yes, queue is empty.");
    } else {
      console.log("No, queue is not empty.");
    }
  }

  print() {
    let tempNode = this.first,
      arr = [];
    while (tempNode !== null) {
      arr.push(tempNode);
      tempNode = tempNode.next;
    }
    console.log(arr);
    console.log(`length = ${this.length}`);
  }
}

const myQueue = new Queue();

myQueue.enqueue(1)
myQueue.enqueue(2)
myQueue.enqueue(3)
myQueue.print()
myQueue.dequeue()
myQueue.dequeue()
myQueue.isEmpty()
myQueue.dequeue()
myQueue.isEmpty()
myQueue.print()
//Joy
//Matt
//Pavel
//Samir
