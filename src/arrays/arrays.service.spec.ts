import { Test, TestingModule } from '@nestjs/testing';
import { MainMenuService } from '../main-menu/main-menu.service';
import { keys } from '../main-menu/main-menu.service.spec';
import { ArraysService } from './arrays.service';
import { CuriousCaseOfBenjaminBulbs } from './class/1-curious-case-of-benjamin-bulbs.class';
import { Pattern1 } from './class/2-patter-1.class';
import * as fs from 'fs';
const data = {
  inputData: 6
};
describe('ArraysService', () => {
  let service: ArraysService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ArraysService]
    }).compile();

    service = module.get<ArraysService>(ArraysService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

describe('test, curious-case-of-benjamin-bulbs', () => {
  let service: ArraysService;
  let mainMenuService: MainMenuService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ArraysService]
    }).compile();

    service = module.get<ArraysService>(ArraysService);
    const moduleMainMenuService: TestingModule = await Test.createTestingModule(
      {
        providers: [MainMenuService]
      }
    ).compile();

    mainMenuService =
      moduleMainMenuService.get<MainMenuService>(MainMenuService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('take number of Bulbs as 6', async () => {
    const enterInput = async () => {
      mainMenuService.writeToRl(data.inputData.toString());
      mainMenuService.writeToRl(keys.enter);
    };
    setTimeout(() => enterInput().then(), 5);
    try {
      const input = await mainMenuService.askQuestion(
        'Please enter number of bulbs: '
      );
      mainMenuService.closeRl();
      expect(input).toBe(data.inputData.toString());
    } catch (error) {
      console.log(error);
    }
  });
  it('check against number of bulbs that will be on after the nth fluctuation in voltage', () => {
    const curiousCaseOfBenjaminBulbs = new CuriousCaseOfBenjaminBulbs();
    const result = curiousCaseOfBenjaminBulbs.bulbsOnAfterNthFluctuation(
      data.inputData
    );
    expect(result).toStrictEqual([1, 4]);
  });
});

describe('test, curious-case-of-benjamin-bulbs', () => {
  let service: ArraysService;
  let mainMenuService: MainMenuService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ArraysService]
    }).compile();

    service = module.get<ArraysService>(ArraysService);
    const moduleMainMenuService: TestingModule = await Test.createTestingModule(
      {
        providers: [MainMenuService]
      }
    ).compile();

    mainMenuService =
      moduleMainMenuService.get<MainMenuService>(MainMenuService);
  });
  it('Take input', async () => {
    const enterInput = async () => {
      mainMenuService.writeToRl(data.inputData.toString());
      mainMenuService.writeToRl(keys.enter);
    };
    setTimeout(() => enterInput().then(), 5);
    try {
      const input = await mainMenuService.askQuestion('Please enter number: ');
      mainMenuService.closeRl();
      expect(input).toBe(data.inputData.toString());
    } catch (error) {
      console.log(error);
    }
  });
  it('check against Pattern-1', () => {
    const pattern1 = new Pattern1();
    pattern1.returnPattern1(parseInt('2'));
    const patternOutput = fs.readFileSync(
      '/run/media/bhargav/Personal/dsa/src/arrays/output-patterns/pattern-1.txt',
      'utf8'
    );
    const result = fs.readFileSync(
      '/run/media/bhargav/Personal/dsa/src/arrays/output-patterns/program-output-pattern-1.txt',
      'utf8'
    );
    expect(result).toEqual(patternOutput);
  });
});
