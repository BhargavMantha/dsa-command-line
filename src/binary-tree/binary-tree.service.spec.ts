import { Test, TestingModule } from '@nestjs/testing';
import { BinaryTreeService } from './binary-tree.service';
import { BinarySearchTree } from './class/binary-search.class';

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
});
