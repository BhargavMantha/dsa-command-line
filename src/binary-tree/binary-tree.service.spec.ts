import { Test, TestingModule } from '@nestjs/testing';
import { BinaryTreeService } from './binary-tree.service';
import { BinarySearchTree } from './class/binary-search.class';
import { BinaryTree } from './class/binary-tree.class';
import { Node } from './class/node.class';

describe('BinaryTreeService', () => {
  let service: BinaryTreeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BinaryTreeService]
    }).compile();

    service = module.get<BinaryTreeService>(BinaryTreeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

describe('BinaryTree Impl', () => {
  it('should give the right Data', () => {
    const binaryTree = new BinarySearchTree();
    binaryTree.add(14);
    binaryTree.add(24);
    binaryTree.add(9);
    binaryTree.add(6);
    binaryTree.add(21);
    expect(binaryTree.root.data).toBe(14);
    expect(binaryTree.root.left.data).toBe(9);
    expect(binaryTree.root.right.data).toBe(24);
    expect(binaryTree.root.left.left.data).toBe(6);
    expect(binaryTree.root.right.right).toBe(null);
    binaryTree.remove(6);
    JSON.stringify(binaryTree, null, 2);
    expect(binaryTree.root.left.left).toBe(null);
  });

  it('Test in order traversal', () => {
    const binaryTree = new BinaryTree(1);
    const node2 = new Node(2);
    const node3 = new Node(3);
    const node4 = new Node(4);
    const node5 = new Node(5);
    const node6 = new Node(6);
    const node7 = new Node(7);
    binaryTree.root.left = node2;
    binaryTree.root.right = node3;
    binaryTree.root.left.left = node4;
    binaryTree.root.left.right = node5;
    binaryTree.root.right.left = node6;
    binaryTree.root.right.right = node7;

    const resultOfInFixIterativeTraversal =
      binaryTree.iterativeTraversalForInOrder(7);
    expect(resultOfInFixIterativeTraversal).toBe('4,2,5,1,6,3,7');

    binaryTree.traversal('in');
    const resultOfInFixTraversal = binaryTree.getInOrderTraversalResult();
    expect(resultOfInFixTraversal).toBe('4,2,5,1,6,3,7');

    binaryTree.traversal('post');
    const resultOfPostFixTraversal = binaryTree.getPostOrderTraversalResult();
    expect(resultOfPostFixTraversal).toBe('4,5,2,6,7,3,1');

    binaryTree.traversal('pre');
    const resultOfPreFixTraversal = binaryTree.getPreOrderTraversalResult();
    expect(resultOfPreFixTraversal).toBe('1,2,4,5,3,6,7');
  });

  it('Test in tree mirror', () => {
    const binaryTree = new BinaryTree(1);
    const node2 = new Node(2);
    const node3 = new Node(3);
    const node4 = new Node(4);
    const node5 = new Node(5);
    const node6 = new Node(6);
    const node7 = new Node(7);
    binaryTree.root.left = node2;
    binaryTree.root.right = node3;
    binaryTree.root.left.left = node4;
    binaryTree.root.left.right = node5;
    binaryTree.root.right.left = node6;
    binaryTree.root.right.right = node7;

    binaryTree.mirrorOfBinaryTree();
    expect(binaryTree.root.data).toBe(1);
    expect(binaryTree.root.right.data).toBe(2);
    expect(binaryTree.root.left.data).toBe(3);
    expect(binaryTree.root.right.left.data).toBe(5);
    expect(binaryTree.root.right.right.data).toBe(4);
    expect(binaryTree.root.left.left.data).toBe(7);
    expect(binaryTree.root.left.right.data).toBe(6);
  });

  it('Should give the right Leaf Node Result and non leaf node result', () => {
    const binaryTree = new BinaryTree(1);
    const node2 = new Node(2);
    const node3 = new Node(3);
    const node4 = new Node(4);
    const node5 = new Node(5);
    const node6 = new Node(6);
    const node7 = new Node(7);
    binaryTree.root.left = node2;
    binaryTree.root.right = node3;
    binaryTree.root.left.left = node4;
    binaryTree.root.left.right = node5;
    binaryTree.root.right.left = node6;
    binaryTree.root.right.right = node7;
    binaryTree.countLeafNodes();
    const result = binaryTree.getCountLeafNodeResult();
    expect(result.leafNodes.join(',')).toBe('4,5,6,7');
    expect(result.count).toBe(4);

    binaryTree.countNonLeafNodes();
    const countNonLeafNodesResult = binaryTree.getCountNonLeafNodeResult();
    expect(countNonLeafNodesResult.leafNodes.sort().join(',')).toBe('1,2,3');
    expect(countNonLeafNodesResult.count).toBe(3);
  });
  it('Should give the right Leaf Node Result and non leaf node result for tree 2', () => {
    const binaryTree = new BinaryTree(1);
    const node2 = new Node(2);
    const node3 = new Node(3);
    const node4 = new Node(4);
    const node5 = new Node(5);
    const node6 = new Node(6);
    const node7 = new Node(7);
    binaryTree.root.left = node2;
    node2.right = node3;
    node3.left = node4;
    node4.right = node5;
    node5.left = node6;
    node6.right = node7;
    binaryTree.countLeafNodes();
    const result = binaryTree.getCountLeafNodeResult();
    expect(result.leafNodes.join(',')).toBe('7');
    expect(result.count).toBe(1);

    binaryTree.countNonLeafNodes();
    const countNonLeafNodesResult = binaryTree.getCountNonLeafNodeResult();
    expect(countNonLeafNodesResult.leafNodes.sort().join(',')).toBe(
      '1,2,3,4,5,6'
    );
    expect(countNonLeafNodesResult.count).toBe(6);
  });
  it('Should right height of tree', () => {
    const binaryTree = new BinaryTree(1);
    const node2 = new Node(2);
    const node3 = new Node(3);
    const node4 = new Node(4);
    const node5 = new Node(5);
    const node6 = new Node(6);
    const node7 = new Node(7);
    binaryTree.root.left = node2;
    binaryTree.root.right = node3;
    binaryTree.root.left.left = node4;
    binaryTree.root.left.right = node5;
    binaryTree.root.right.left = node6;
    binaryTree.root.right.right = node7;

    const height = binaryTree.heightOfABinaryTree();
    expect(height).toBe(3);
  });

  it('Should right height of tree 2', () => {
    const binaryTree = new BinaryTree(1);
    const node2 = new Node(2);
    const node3 = new Node(3);
    const node4 = new Node(4);
    const node5 = new Node(5);
    const node6 = new Node(6);
    const node7 = new Node(7);
    binaryTree.root.left = node2;
    node2.right = node3;
    node3.left = node4;
    node4.right = node5;
    node5.left = node6;
    node6.right = node7;
    const height = binaryTree.heightOfABinaryTree();

    expect(height).toBe(7);
  });
});
