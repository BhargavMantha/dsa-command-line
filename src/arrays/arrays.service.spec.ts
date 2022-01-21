import { Test, TestingModule } from '@nestjs/testing';
import { MainMenuService } from '../main-menu/main-menu.service';
import { keys } from '../main-menu/main-menu.service.spec';
import { ArraysService } from './arrays.service';
import { CuriousCaseOfBenjaminBulbs } from './class/1-curious-case-of-benjamin-bulbs.class';
import * as fs from 'fs';
import { Pattern1 } from './class/2-patter-1.class';
import { Pattern2 } from './class/3-patter-2.class';
import { Pattern3 } from './class/4-patter-3.class';
import { Pattern4 } from './class/5-patter-4.class';
import { Pattern5 } from './class/6-patter-5.class';
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
    setTimeout(() => enterInput().then(), 500);
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

describe('test, Patterns-1', () => {
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
describe('test, Patterns-2', () => {
  it('check against Pattern-2', () => {
    const pattern2 = new Pattern2();
    pattern2.returnPattern2(parseInt('5'));
    const patternOutput = fs.readFileSync(
      '/run/media/bhargav/Personal/dsa/src/arrays/output-patterns/pattern-2.txt',
      'utf8'
    );
    const result = fs.readFileSync(
      '/run/media/bhargav/Personal/dsa/src/arrays/output-patterns/program-output-pattern-2.txt',
      'utf8'
    );
    expect(result).toEqual(patternOutput);
  });
});
describe('test, Patterns-3', () => {
  it('check against Pattern-3', () => {
    const pattern3 = new Pattern3();
    pattern3.returnPattern3(parseInt('5'));
    const patternOutput = fs.readFileSync(
      '/run/media/bhargav/Personal/dsa/src/arrays/output-patterns/pattern-3.txt',
      'utf8'
    );
    const result = fs.readFileSync(
      '/run/media/bhargav/Personal/dsa/src/arrays/output-patterns/program-output-pattern-3.txt',
      'utf8'
    );
    expect(result.trim()).toEqual(patternOutput.trim());
  });
});
describe('test, Patterns-4', () => {
  it('check against Pattern-4', () => {
    const pattern4 = new Pattern4();
    pattern4.returnPattern4(parseInt('5'));
    const patternOutput = fs.readFileSync(
      '/run/media/bhargav/Personal/dsa/src/arrays/output-patterns/pattern-4.txt',
      'utf8'
    );
    const result = fs.readFileSync(
      '/run/media/bhargav/Personal/dsa/src/arrays/output-patterns/program-output-pattern-4.txt',
      'utf8'
    );
    expect(result.trim()).toEqual(patternOutput.trim());
  });
});

describe('test, Patterns-5', () => {
  it('check against Pattern-5', () => {
    const pattern5 = new Pattern5();
    pattern5.returnPattern5(parseInt('7'));
    const patternOutput = fs.readFileSync(
      '/run/media/bhargav/Personal/dsa/src/arrays/output-patterns/pattern-5.txt',
      'utf8'
    );
    const result = fs.readFileSync(
      '/run/media/bhargav/Personal/dsa/src/arrays/output-patterns/program-output-pattern-5.txt',
      'utf8'
    );
    expect(result).toEqual(patternOutput);
  });
});
