import { Node } from './node.class';

export class CircularLinkedList {
  length: number;
  head: Node;
  tail: Node;
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  traverseLinkedList() {
    let tempPointer = this.head;
    let i = 0;
    while (i < this.length) {
      console.log('The value ion the current node is: ', tempPointer.value);
      tempPointer = tempPointer.next;
      i++;
    }
  }

  push(value: any) {
    const node = new Node(value, this.head);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
      this.tail.next = this.head;
    } else {
      let current = this.head;
      while (current.next !== this.head) {
        current = current.next;
      }
      current.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.head === null) {
      console.log('No items to POP :(');
      return;
    }
    let previous = this.head;
    let current = previous.next;
    while (current && current.next !== this.head) {
      previous = current;
      current = current.next;
    }
    previous.next = this.head;
    this.tail = previous;
    this.tail.next = this.head;
    const poppedItem = current;
    current = undefined;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return poppedItem;
  }

  insertAtFirst(value: any) {
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
    this.length++;
  }

  deleteByIndex(index: number) {
    if (this.head === null) return undefined;
    if (index > this.length) return 'Out of bound index';
    let previous = this.head;
    let current = previous.next;
    for (let i = 2; i < index; i++) {
      previous = current;
      current = current.next;
    }
    let poppedItem = current;
    if (index === this.length) {
      poppedItem = previous.next;
      previous.next = this.head;
      this.tail = previous;
      current = undefined;
    } else if (index === 0) {
      poppedItem = previous;
      this.head = current;
      previous = undefined;
    } else {
      previous.next = current.next;
      current = undefined;
    }

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    this.length--;
    return poppedItem;
  }
}
