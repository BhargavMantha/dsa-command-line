import { MainMenuService } from '../../main-menu/main-menu.service';
import * as fs from 'fs';

/**
 * TODO: 1. You are given a number n.
 * TODO: 2. You've to create a pattern of * and separated by tab as shown in output format.
 */
export class Pattern1 {
  mainMenuService: MainMenuService;
  constructor() {
    this.mainMenuService = new MainMenuService();
  }
  async takeNumberForPatternAsInput() {
    try {
      const input = await this.mainMenuService.askQuestion(
        'Please enter the number: '
      );
      this.mainMenuService.closeRl();
      return input;
    } catch (error) {
      console.log(error);
    }
  }
  returnPattern1(inputNumber: number) {
    let pattern = ``;
    for (let i = 1; i <= inputNumber; i++) {
      for (let j = 1; j <= i; j++) {
        pattern = `${pattern}*\t`;
      }
      pattern = `${pattern}\n`;
    }
    fs.writeFileSync(
      '/run/media/bhargav/Personal/dsa/src/arrays/output-patterns/program-output-pattern-1.txt',
      pattern.trim()
    );
    return pattern;
  }
}
