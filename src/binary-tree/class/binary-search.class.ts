import { Node } from './node.class';

export class BinarySearchTree {
  root: Node;
  constructor() {
    this.root = null;
  }
  add(data: any) {
    const newNode = new Node(data);
    if (this.root === null) this.root = newNode;
    else this.addHelper(this.root, newNode);
  }

  addHelper(node: Node, newNode: Node) {
    if (newNode.data < node.data) {
      if (node.left === null) node.left = newNode;
      else this.addHelper(node.left, newNode);
    } else {
      if (node.right === null) node.right = newNode;
      else this.addHelper(node.right, newNode);
    }
  }
  find(data: any, node = this.root) {
    if (node === null || node.data === data) {
      return node;
    } else if (data < node.data) {
      return this.find(data, node.left);
    } else if (data > node.data) {
      return this.find(data, node.right);
    }
  }
  findMinNode(node: Node) {
    if (node.left === null) return node;
    else return this.findMinNode(node.left);
  }
  findMaxNode(node: Node) {
    if (node.right === null) return node;
    else return this.findMinNode(node.right);
  }
  remove(data: any) {
    this.root = this.removeHelper(this.root, data);
  }
  removeHelper(node: Node, data: any) {
    if (node === null) return null;
    if (data < node.data) {
      node.left = this.removeHelper(node.left, data);
      return node;
    } else if (data > node.data) {
      node.right = this.removeHelper(node.right, data);
      return node;
    } else if (node.left === null && node.right === null) {
      node = null;
      return node;
    } else if (node.left === null) {
      node = node.right;
      return node;
    } else if (node.right === null) {
      node = node.left;
      return node;
    }
    const minNode = this.findMinNode(node.right);
    node.data = minNode.data;
    node.right = this.removeHelper(node.right, minNode.data);
    return node;
  }
}
