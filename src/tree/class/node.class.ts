import { v4 as uuidv4 } from 'uuid';

export class Node {
  data: any;
  parentNode: Node;
  children: Node[] = [];
  id: string;

  constructor(data: any, parentNode: Node, child?: Node) {
    this.data = data;
    this.parentNode = parentNode;
    this.id = uuidv4();
    if (child) this.children.push(child);
  }
}
