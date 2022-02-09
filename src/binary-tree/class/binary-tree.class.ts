import { Stack } from '../../stack/class/stack.class';
import { Node } from './node.class';

export class BinaryTree {
  root: Node;
  currentNode: Node;
  preOrderTraversalResult: any[] = null;
  postOrderTraversalResult: any[] = null;
  inOrderTraversalResult: any[] = null;
  leafNodes = null;
  nonLeafNodes = null;
  height: number;

  constructor(data: any) {
    this.root = new Node(data);
    this.postOrderTraversalResult = [];
    this.preOrderTraversalResult = [];
    this.inOrderTraversalResult = [];
    this.leafNodes = [];
    this.nonLeafNodes = [];
    this.height = 0;
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

  mirrorOfBinaryTree(node = this.root) {
    if (node === null) {
      return;
    }
    const temp = node.right;
    node.right = node.left;
    node.left = temp;
    this.mirrorOfBinaryTree(node.left);
    this.mirrorOfBinaryTree(node.right);
  }
  countLeafNodes(node = this.root) {
    if (node === null) {
      return null;
    }
    const leftNode = this.countLeafNodes(node.left);
    const rightNode = this.countLeafNodes(node.right);
    if (rightNode === null && leftNode === null) {
      this.leafNodes.push(node.data);
    }
  }
  getCountLeafNodeResult() {
    return { count: this.leafNodes.length, leafNodes: this.leafNodes };
  }

  countNonLeafNodes(node = this.root) {
    if (node === null) {
      return null;
    }
    const leftNode = this.countNonLeafNodes(node.left);
    const rightNode = this.countNonLeafNodes(node.right);
    if (leftNode !== null || rightNode !== null) {
      this.nonLeafNodes.push(node.data);
    }
  }
  getCountNonLeafNodeResult() {
    return { count: this.nonLeafNodes.length, leafNodes: this.nonLeafNodes };
  }
  heightOfABinaryTree(node = this.root) {
    if (node === null) {
      return 0;
    }
    let leftNodeHeight = this.heightOfABinaryTree(node.left);
    let rightNodeHeight = this.heightOfABinaryTree(node.right);
    if (leftNodeHeight > rightNodeHeight) {
      return leftNodeHeight + 1;
    } else {
      return rightNodeHeight + 1;
    }
  }
}
