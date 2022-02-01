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

  /**
   * 1. create a temporary variable to the function which will hold the current pointer to the linked-list
   * 2. initially the temp variable say tempPointer will be head
   * 3. loop over the linkedList until the next pointer on the tempPointer is null
   */
  traverseLinkedList() {
    let tempPointer = this.head;
    while (tempPointer.next !== null) {
      console.log('The value ion the current node is: ', tempPointer.value);
      tempPointer = tempPointer.next;
    }
  }
  /**
   * 1. create a new node with value as the item and next as null
   * 2. if both head and tail are null
   * 3. initialize both head and tail to be the new node
   * 4. in case head is not null
   * 4.1 loop over the linked list until you find the node with next as null call it current
   * 4.2 now point current.next to be the new node
   * 4.3 and the tai toi be new Node as well
   * 4.4 increment the length of the linked-kist
   * 5. return the linked list
   */
  push(value: any) {
    const node = new Node(value);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }
  /**
   * 1. create a variable previous item
   * 2. initialize the previous item with head
   * 3. initialize the current item to previous.next
   * 4. iterate over the linked list until the next element of the linked-list is null
   * 5. set the tail to previous item
   * 6. and current to null
   * 7. decrement the length
   * 8. incase of length equal to 0 set both head and tail as null
   */
  pop() {
    if (this.head === null) {
      console.log('No items to POP :(');
      return;
    }
    let previous = this.head;
    let current = previous.next;
    while (current && current.next) {
      previous = current;
      current = current.next;
    }
    previous.next = null;
    this.tail = previous;
    const poppedItem = current;
    current = undefined;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return poppedItem;
  }
}
