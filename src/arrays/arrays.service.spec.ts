import { Test, TestingModule } from '@nestjs/testing';
import { ArraysService } from './arrays.service';

describe('ArraysService', () => {
  let service: ArraysService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ArraysService],
    }).compile();

    service = module.get<ArraysService>(ArraysService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
