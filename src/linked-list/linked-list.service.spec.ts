import { Test, TestingModule } from '@nestjs/testing';
import { LinkedListService } from './linked-list.service';
import { Node } from './class/node.class';
import { SinglyLinkedList } from './class/singly-linked-list.class';
const nodeInput = ['Hi', 'there', 'Bhargav'];
describe('LinkedListService', () => {
  let service: LinkedListService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LinkedListService]
    }).compile();

    service = module.get<LinkedListService>(LinkedListService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

describe('Must Return the right node value', () => {
  const node = new Node(nodeInput[0]);
  node.next = new Node(nodeInput[1]);
  node.next.next = new Node(nodeInput[2]);
  expect(node.value).toBe('Hi');
  expect(node.next.value).toBe('there');
  expect(node.next.next.value).toBe('Bhargav');
});

describe('Must Return the right node value for Singly Linked List', () => {
  const singlyLinkedList = new SinglyLinkedList();
  expect(singlyLinkedList.head).toBe(null);
  expect(singlyLinkedList.tail).toBe(null);
  expect(singlyLinkedList.length).toBe(0);
  singlyLinkedList.push(1);
  expect(singlyLinkedList.head.value).toBe(1);
  expect(singlyLinkedList.tail.value).toBe(1);
  expect(singlyLinkedList.length).toBe(1);
  singlyLinkedList.push(2);
  expect(singlyLinkedList.head.value).toBe(1);
  expect(singlyLinkedList.tail.value).toBe(2);
  expect(singlyLinkedList.length).toBe(2);
  singlyLinkedList.push(3);
  expect(singlyLinkedList.head.value).toBe(1);
  expect(singlyLinkedList.tail.value).toBe(3);
  expect(singlyLinkedList.length).toBe(3);
});
