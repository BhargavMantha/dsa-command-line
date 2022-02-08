export class Node {
  data: any;
  left: Node;
  right: Node;
  constructor(data: any) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
