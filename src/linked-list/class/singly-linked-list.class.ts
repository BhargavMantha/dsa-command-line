import { Node } from './node.class';
export class SinglyLinkedList {
  length: number;
  head: Node;
  tail: Node;
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
  push(value: any) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length += 1;
    return this;
  }
  pop() {
    let secondLastElement: Node = this.head;
    for (let i = 1; i < this.length - 1; i++) {
      secondLastElement = secondLastElement.next;
    }
    this.length -= 1;
    if (this.length === 0) {
      this.head = null;
      secondLastElement = null;
    }
    this.tail = secondLastElement;
    this.tail.next = null;
    return this;
  }
}
