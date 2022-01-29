import { Test, TestingModule } from '@nestjs/testing';
import { CircularQueueImplementationWithArray } from './class/circular-queue.class';
import { QueueImplementationWithArray } from './class/queue.class';
import { QueueService } from './queue.service';

describe('QueueService', () => {
  let service: QueueService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QueueService]
    }).compile();

    service = module.get<QueueService>(QueueService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

describe('Test Queue fro the right response for enqueue and dequeue', () => {
  const queue = new QueueImplementationWithArray(10);
  expect(queue.front).toBe(-1);
  expect(queue.rear).toBe(-1);

  queue.enqueue(0);
  expect(queue.front).toBe(0);
  expect(queue.rear).toBe(0);

  queue.enqueue(1);
  expect(queue.front).toBe(0);
  expect(queue.rear).toBe(1);

  queue.enqueue(2);
  queue.enqueue(3);
  queue.enqueue(4);
  queue.enqueue(5);
  queue.enqueue(6);
  queue.enqueue(7);
  queue.enqueue(8);
  queue.enqueue(9);
  expect(queue.queueArray.length).toBe(10);
  expect(queue.queueArray[0]).toBe(0);
  expect(queue.queueArray[1]).toBe(1);
  expect(queue.queueArray[2]).toBe(2);
  const element = queue.dequeue();
  expect(queue.front).toBe(1);
  expect(queue.rear).toBe(9);
  expect(element).toBe(0);
});

describe('Test CircularQueue for the right response for enqueue and dequeue', () => {
  const queue = new CircularQueueImplementationWithArray(10);
  expect(queue.front).toBe(-1);
  expect(queue.rear).toBe(-1);

  queue.enqueue(0);
  expect(queue.front).toBe(0);
  expect(queue.rear).toBe(0);

  queue.enqueue(1);
  expect(queue.front).toBe(0);
  expect(queue.rear).toBe(1);

  queue.enqueue(2);
  queue.enqueue(3);
  queue.enqueue(4);
  queue.enqueue(5);
  queue.enqueue(6);
  queue.enqueue(7);
  queue.enqueue(8);
  queue.enqueue(9);
  expect(queue.queueArray.length).toBe(10);
  expect(queue.queueArray[0]).toBe(0);
  expect(queue.queueArray[1]).toBe(1);
  expect(queue.queueArray[2]).toBe(2);
  const element = queue.dequeue();
  expect(queue.front).toBe(1);
  expect(queue.rear).toBe(9);
  expect(element).toBe(0);
});
