import { Test, TestingModule } from '@nestjs/testing';
import { LinkedListService } from './linked-list.service';
import { Node } from './class/node.class';
import { SinglyLinkedList } from './class/singly-linked-list.class';
import { CircularLinkedList } from './class/circular-linked-list.class';
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
  it('should be defined', () => {
    const node = new Node(nodeInput[0]);
    node.next = new Node(nodeInput[1]);
    node.next.next = new Node(nodeInput[2]);
    expect(node.value).toBe('Hi');
    expect(node.next.value).toBe('there');
    expect(node.next.next.value).toBe('Bhargav');
  });

  it('Must Return the right node value for Singly Linked List', () => {
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
    singlyLinkedList.pop();
    expect(singlyLinkedList.head.value).toBe(1);
    expect(singlyLinkedList.tail.value).toBe(2);
    expect(singlyLinkedList.length).toBe(2);
    singlyLinkedList.pop();
    expect(singlyLinkedList.head.value).toBe(1);
    expect(singlyLinkedList.tail.value).toBe(1);
    expect(singlyLinkedList.length).toBe(1);
    singlyLinkedList.pop();
    expect(singlyLinkedList.head).toBe(null);
    expect(singlyLinkedList.tail).toBe(null);
    expect(singlyLinkedList.length).toBe(0);
  });

  it('test insert at First', () => {
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
    singlyLinkedList.insertAtFirst(0);
    expect(singlyLinkedList.head.value).toBe(0);
    expect(singlyLinkedList.tail.value).toBe(2);
    expect(singlyLinkedList.length).toBe(3);
  });

  it('test delete at index', () => {
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
    singlyLinkedList.deleteByIndex(0);
    expect(singlyLinkedList.head.value).toBe(2);
    expect(singlyLinkedList.tail.value).toBe(3);
    expect(singlyLinkedList.length).toBe(2);
  });
});

describe('Test Circular queue', () => {
  it('should be defined', () => {
    const node = new Node(nodeInput[0]);
    node.next = new Node(nodeInput[1]);
    node.next.next = new Node(nodeInput[2]);
    expect(node.value).toBe('Hi');
    expect(node.next.value).toBe('there');
    expect(node.next.next.value).toBe('Bhargav');
  });

  it('Must Return the right node value', () => {
    const circularLinkedList = new CircularLinkedList();
    expect(circularLinkedList.head).toBe(null);
    expect(circularLinkedList.tail).toBe(null);
    expect(circularLinkedList.length).toBe(0);
    circularLinkedList.push(1);
    expect(circularLinkedList.head.value).toBe(1);
    expect(circularLinkedList.tail.value).toBe(1);
    expect(circularLinkedList.tail.next).toBe(circularLinkedList.head);
    expect(circularLinkedList.length).toBe(1);
    circularLinkedList.push(2);
    expect(circularLinkedList.head.value).toBe(1);
    expect(circularLinkedList.tail.value).toBe(2);
    expect(circularLinkedList.length).toBe(2);
    circularLinkedList.push(3);
    expect(circularLinkedList.head.value).toBe(1);
    expect(circularLinkedList.tail.value).toBe(3);
    expect(circularLinkedList.length).toBe(3);
    circularLinkedList.pop();
    expect(circularLinkedList.head.value).toBe(1);
    expect(circularLinkedList.tail.value).toBe(2);
    expect(circularLinkedList.length).toBe(2);
    circularLinkedList.pop();
    expect(circularLinkedList.head.value).toBe(1);
    expect(circularLinkedList.tail.value).toBe(1);
    expect(circularLinkedList.tail.next).toBe(circularLinkedList.head);
    expect(circularLinkedList.length).toBe(1);
    circularLinkedList.pop();
    expect(circularLinkedList.head).toBe(null);
    expect(circularLinkedList.tail).toBe(null);
    expect(circularLinkedList.length).toBe(0);
  });

  it('test insert at First', () => {
    const circularLinkedList = new CircularLinkedList();
    expect(circularLinkedList.head).toBe(null);
    expect(circularLinkedList.tail).toBe(null);
    expect(circularLinkedList.length).toBe(0);
    circularLinkedList.push(1);
    expect(circularLinkedList.head.value).toBe(1);
    expect(circularLinkedList.tail.value).toBe(1);
    expect(circularLinkedList.tail.next).toBe(circularLinkedList.head);
    expect(circularLinkedList.length).toBe(1);
    circularLinkedList.push(2);
    expect(circularLinkedList.head.value).toBe(1);
    expect(circularLinkedList.tail.value).toBe(2);
    expect(circularLinkedList.length).toBe(2);
    circularLinkedList.insertAtFirst(0);
    expect(circularLinkedList.head.value).toBe(0);
    expect(circularLinkedList.tail.value).toBe(2);
    expect(circularLinkedList.length).toBe(3);
  });

  it('test delete at index', () => {
    const circularLinkedList = new CircularLinkedList();
    expect(circularLinkedList.head).toBe(null);
    expect(circularLinkedList.tail).toBe(null);
    expect(circularLinkedList.length).toBe(0);
    circularLinkedList.push(1);
    expect(circularLinkedList.head.value).toBe(1);
    expect(circularLinkedList.tail.value).toBe(1);
    expect(circularLinkedList.length).toBe(1);
    circularLinkedList.push(2);
    expect(circularLinkedList.head.value).toBe(1);
    expect(circularLinkedList.tail.value).toBe(2);
    expect(circularLinkedList.length).toBe(2);
    circularLinkedList.push(3);
    expect(circularLinkedList.head.value).toBe(1);
    expect(circularLinkedList.tail.value).toBe(3);
    expect(circularLinkedList.tail.next).toBe(circularLinkedList.head);
    expect(circularLinkedList.length).toBe(3);
    circularLinkedList.deleteByIndex(0);
    expect(circularLinkedList.head.value).toBe(2);
    expect(circularLinkedList.tail.value).toBe(3);
    expect(circularLinkedList.length).toBe(2);
  });
});
