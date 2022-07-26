import { Node } from "./Node.js";
class DoublyLinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);

    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);

    newNode.next = this.head;
    this.head.prev = newNode;
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

    currNode.next.prev = newNode;
    newNode.next = currNode.next;
    newNode.prev = currNode;
    currNode.next = newNode;
    this.length++;

    return this;
  }

  remove(index) {
    if (index === 0) {
      this.head.next.prev = null;
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
    currNode.next.next.prev = currNode;
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

  print() {
    let tempNode = this.head, arr = [];
    while(tempNode !== null) {
      arr.push(tempNode)
      tempNode = tempNode.next;
    }
    console.log(arr);
  }
}

let myLinkedList = new DoublyLinkedList(10);

myLinkedList.append(5);
myLinkedList.prepend(152);
myLinkedList.insert(1, 18);
myLinkedList.remove(2);

myLinkedList.print();
