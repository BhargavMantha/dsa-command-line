import { Test, TestingModule } from '@nestjs/testing';
import { MainMenuService } from './main-menu.service';
const inputData = 'Hello Bhargav';
export const keys = {
  up: '\x1B\x5B\x41',
  down: '\x1B\x5B\x42',
  enter: '\x0D',
  space: '\x20'
};
describe('MainMenuService', () => {
  let service: MainMenuService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MainMenuService]
    }).compile();

    service = module.get<MainMenuService>(MainMenuService);
  });
  afterAll(() => {});
  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should take input on call on the function askQuestion', async () => {
    const enterInput = async () => {
      service.writeToRl(inputData);
      service.writeToRl(keys.enter);
    };
    setTimeout(() => enterInput().then(), 5);
    try {
      const input = await service.askQuestion('Please enter Your choice: ');
      service.closeRl();
      expect(input).toBe(inputData);
    } catch (error) {
      console.log(error);
    }
  });
});
