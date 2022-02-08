import { Node } from './node.class';
export class Tree {
  rootNode: Node;
  depth = 0;
  constructor(data: any) {
    this.rootNode = new Node(data, null);
  }
  findNodeByData(data: any, parentNode?: Node) {
    if (!parentNode) parentNode = this.rootNode;
    let currentNode = parentNode;
    if (currentNode.data === data) {
      return currentNode;
    }
    for (let i = 0; i < parentNode.children.length; i++) {
      const childNode = parentNode.children[i];
      if (childNode.data === data) {
        return childNode;
      }
      const node = this.findNodeByData(data, childNode);
      if (node) return node;
    }
    return null;
  }
  removeNode = (data: any) => {
    let nodeToRemove = this.findNodeByData(data);
    const toReturn = nodeToRemove;
    const parentNode = nodeToRemove.parentNode;
    const [indexToRemove, ...rest] = parentNode.children.filter(
      (node: Node, index: number) => (node.data === data ? index : null)
    );
    parentNode.children.splice(indexToRemove, 1);
    return toReturn;
  };
}
