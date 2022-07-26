import { Node } from "./Node.js";
class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);

    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  insert(index, value) {
    if (index === 0) {
      return this.prepend(value);
    }
    if (index >= this.length) {
      return this.append(value);
    }

    const newNode = new Node(value);
    let currNode = this.traverseToIndex(index - 1);

    newNode.next = currNode.next;
    currNode.next = newNode;
    this.length++;

    return this;
  }

  remove(index) {
    if (index === 0) {
      this.head = this.head.next;
      this.length--;
      return this;
    }

    if (index >= this.length) {
      let currNode = this.traverseToIndex(this.length - 2);
      currNode.next = null;
      this.length--;
      return this;
    }

    let currNode = this.traverseToIndex(index - 1);
    currNode.next = currNode.next.next;
    this.length--;
    return this;
  }

  traverseToIndex(index) {
    let currNode = this.head;
    for (let i = 0; i < index; i++) {
      currNode = currNode.next;
    }
    return currNode;
  }

  reverse() {
    if (this.length <= 1) {
      return this;
    }
    let first = this.head, second = this.head.next;
    this.tail = this.head;

    while(second) {
      let temp = second.next;
      console.log(second.next)
      second.next = first;
      first = second;
      second = temp;
    }
    this.head.next = null;
    this.head = first;
  }

  print() {
    let tempNode = this.head, arr = [];
    while(tempNode !== null) {
      arr.push(tempNode)
      tempNode = tempNode.next;
    }
    console.log(arr);
  }
}

let myLinkedList = new LinkedList(10);

myLinkedList.append(5);
myLinkedList.prepend(23);
myLinkedList.insert(2, 18);
// myLinkedList.remove(1);

// myLinkedList.print();
myLinkedList.reverse()
myLinkedList.print();
