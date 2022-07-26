import { Node } from "./Node.js";

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    console.log(this.top);
  }

  push(value) {
    const newNode = new Node(value);

    if (this.top === null) {
      this.top = this.bottom = newNode;
    } else {
      let temp = this.top;
      this.top = newNode;
      this.top.next = temp;
    }
    this.length++;
  }

  pop() {
    if (!this.top) {
      return null;
    }

    if(this.top === this.bottom) {
      this.bottom = this.top = null;
      this.length--;
      return;
    }

    this.top = this.top.next;
    this.length--;
  }

  isEmpty() {
    if (this.length === 0) {
      console.log("Yes, stack is empty.");
    } else {
      console.log("No, stack is not empty.");
    }
  }

  print() {
    let tempNode = this.top,
      arr = [];
    while (tempNode !== null) {
      arr.push(tempNode);
      tempNode = tempNode.next;
    }
    console.log(arr);
    console.log(`length = ${this.length}`);
  }
}

const myStack = new Stack();

myStack.push("1");
myStack.push("2");
myStack.peek();
myStack.push("3");
myStack.print();
myStack.pop();
myStack.pop();
myStack.isEmpty();
myStack.pop();
myStack.print();
myStack.isEmpty();
