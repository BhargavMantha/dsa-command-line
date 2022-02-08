import { Stack } from '../../stack/class/stack.class';
import { Node } from './node.class';

export class BinaryTree {
  root: Node;
  currentNode: Node;
  preOrderTraversalResult: any[] = null;
  postOrderTraversalResult: any[] = null;
  inOrderTraversalResult: any[] = null;
  constructor(data: any) {
    this.root = new Node(data);
  }
  iterativeTraversalForInOrder(numberOFNodesInTree: number) {
    const traversedResult = [];
    this.currentNode = this.root;
    const stack = new Stack(numberOFNodesInTree);
    while (this.currentNode !== null || stack.isEmpty() === false) {
      while (this.currentNode !== null) {
        stack.push(this.currentNode);
        this.currentNode = this.currentNode.left;
      }
      this.currentNode = stack.pop();
      traversedResult.push(this.currentNode.data);
      this.currentNode = this.currentNode.right;
    }

    return traversedResult.join(',');
  }

  traversal(traversalType: 'in' | 'post' | 'pre', node: Node = this.root) {
    if (node === null) {
      return null;
    }
    if (node === this.root) {
      this.postOrderTraversalResult = [];
      this.preOrderTraversalResult = [];
      this.inOrderTraversalResult = [];
    }
    if (traversalType === 'pre') this.preOrderTraversalResult.push(node.data);
    this.traversal(traversalType, node.left);
    if (traversalType === 'in') this.inOrderTraversalResult.push(node.data);
    this.traversal(traversalType, node.right);
    if (traversalType === 'post') this.postOrderTraversalResult.push(node.data);
  }
  getPostOrderTraversalResult() {
    return this.postOrderTraversalResult.join(',');
  }
  getPreOrderTraversalResult() {
    return this.preOrderTraversalResult.join(',');
  }
  getInOrderTraversalResult() {
    return this.inOrderTraversalResult.join(',');
  }
}
