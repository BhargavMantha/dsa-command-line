export class Node {
  value: any;
  next: Node;
  constructor(value: any, next?: Node) {
    this.value = value;
    this.next = next !== null || next !== undefined ? next : null;
  }
}
