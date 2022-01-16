import { Test, TestingModule } from '@nestjs/testing';
import { IsNumberPrimeService } from './is-number-prime.service';

describe('IsNumberPrimeService', () => {
  let service: IsNumberPrimeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IsNumberPrimeService],
    }).compile();

    service = module.get<IsNumberPrimeService>(IsNumberPrimeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
