import { Test, TestingModule } from '@nestjs/testing';
import { Stack } from './class/stack.class';
import { StackService } from './stack.service';

describe('StackService', () => {
  let service: StackService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StackService]
    }).compile();

    service = module.get<StackService>(StackService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should give the right result for Push Pop and getTop', () => {
    const stack = new Stack(10);
    stack.push(0);
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(4);
    stack.push(5);
    const pop1 = stack.pop();
    expect(pop1).toBe(5);
    const pop2 = stack.pop();
    expect(pop2).toBe(4);
    const freeCount = stack.getFreeCount();
    expect(freeCount).toBe(6);
    const isEmpty = stack.isEmpty();
    expect(isEmpty).toBe(false);
    const top = stack.getTop();
    expect(top).toBe(3);
  });
});
