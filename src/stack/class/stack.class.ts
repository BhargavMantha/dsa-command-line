export class Stack {
  size: number;
  stackArr: any[] = null;
  top = -1;
  constructor(size: number) {
    this.stackArr = [];
    this.size = size - 1;
    for (let i = 0; i < this.size; i++) this.stackArr.push(null);
  }
  push(item: any) {
    if (this.top >= this.size) {
      throw 'Stack OverFlow';
    }
    this.top += 1;
    this.stackArr[this.top] = item;
  }
  pop() {
    if (this.top >= this.size) {
      throw 'Stack UnderFlow';
    } else {
      const item = JSON.parse(JSON.stringify(this.stackArr[this.top]));
      this.stackArr[this.top] = null;
      this.top -= 1;
      return item;
    }
  }
  isEmpty() {
    if (this.top < 0) return true;
    else return false;
  }
  getFreeCount() {
    return this.size - this.top;
  }
  getTop() {
    return this.stackArr[this.top];
  }
}
