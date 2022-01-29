export class QueueImplementationWithArray {
  front: number;
  rear: any;
  queueArray: any[];
  size: number;
  constructor(size: number) {
    this.front = -1;
    this.rear = -1;
    this.queueArray = [];
    this.size = size;
    this.initializeArrayElementsToNull();
  }
  initializeArrayElementsToNull() {
    for (let i = 0; i < this.size; i++) {
      this.queueArray.push(null);
    }
  }
  enqueue(item: any) {
    if (this.rear === this.size) {
      throw 'Queue is full';
    }
    if (this.rear === -1 && this.front === -1) this.front = 0;
    this.rear = this.rear + 1;
    this.queueArray[this.rear] = item;
  }
  dequeue() {
    if (this.front === -1) {
      throw 'Queue is empty';
    }
    const item = this.queueArray[this.front];
    if (this.front === this.rear) this.front = this.rear = 0;
    else this.front += 1;
    return item;
  }
}
