import { Test, TestingModule } from '@nestjs/testing';
import { Node } from './class/node.class';
import { Tree } from './class/tree.class';
import { TreeService } from './tree.service';

describe('TreeService', () => {
  let service: TreeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TreeService]
    }).compile();

    service = module.get<TreeService>(TreeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

describe('Test Tree Implementations', () => {
  const tree = new Tree(0);
  const child1 = new Node(1, tree.rootNode);
  tree.rootNode.children.push(child1);

  const child2 = new Node(2, tree.rootNode);
  tree.rootNode.children.push(child2);
  const child3 = new Node(3, tree.rootNode);
  tree.rootNode.children.push(child3);
  it('test if right count of children are present', () => {
    expect(tree.rootNode.children.length).toBe(3);
  });
  it('should find the 1st Node', () => {
    const findResult1 = tree.findNodeByData(1);
    expect(findResult1.data).toBe(child1.data);
  });
  it('should find the 2nd Node', () => {
    const findResult2 = tree.findNodeByData(2);
    expect(findResult2.data).toBe(child2.data);
    expect(findResult2.parentNode.data).toBe(0);
  });
  it('should not find the 4th Node', () => {
    const findResult4 = tree.findNodeByData(4);
    expect(findResult4).toBe(null);
  });

  it('should find the 4th Node', () => {
    const child4 = new Node(4, child1);
    child1.children.push(child4);
    const findResult4 = tree.findNodeByData(4);
    expect(findResult4.data).toBe(child4.data);
  });
});
describe('Test remove Implementations', () => {
  it('should remove child node 3', () => {
    const tree = new Tree(0);
    const child1 = new Node(1, tree.rootNode);
    tree.rootNode.children.push(child1);
    const child2 = new Node(2, tree.rootNode);
    tree.rootNode.children.push(child2);
    const child3 = new Node(3, tree.rootNode);
    tree.rootNode.children.push(child3);
    const node: Node = tree.removeNode(3);
    expect(tree.rootNode.children.length).toBe(2);
    expect(node.data).toBe(3);
    tree.rootNode.children.push(child3);
    const node2: Node = tree.removeNode(2);
    expect(tree.rootNode.children.length).toBe(2);
    expect(node2.data).toBe(2);
  });
});
