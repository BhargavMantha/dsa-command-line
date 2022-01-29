export class CircularQueueImplementationWithArray {
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
    if (this.front === -1) {
      this.front = 0;
      this.rear = 0;
      this.queueArray[this.front] = item;
    } else {
      const next = (this.rear % this.size) + 1;
      if (next !== this.front) {
        this.rear = next;
        this.queueArray[this.rear] = item;
      } else throw 'Queue is full';
    }
  }
  dequeue() {
    if (this.front === -1) {
      throw 'Queue is empty';
    }
    const item = this.queueArray[this.front];
    if (this.front === this.rear) this.front = this.rear = 0;
    else this.front = (this.front % this.size) + 1;
    console.log(this.front, this.rear);
    return item;
  }
}
