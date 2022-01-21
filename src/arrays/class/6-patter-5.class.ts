import { MainMenuService } from '../../main-menu/main-menu.service';
import * as fs from 'fs';
import { Console } from 'console';

/**
 * TODO: 1. You are given a number n.
 * TODO: 2. You've to create a pattern of * and separated by tab as shown in output format.
 *
 
		*	
	*	*	*	
*	*	*	*	*	
	*	*	*	
		*	
                
 *
 *
 *
 */
export class Pattern5 {
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
  returnPattern5(inputNumber: number) {
    let pattern = ``;
    let spaces = 0;
    let stars = 0;

    for (let i = 1; i <= inputNumber; i++) {
      if (i <= inputNumber / 2) {
        spaces = inputNumber / 2 - i;
        stars = i * 2 - 1;
      }
      if (i === parseInt((inputNumber / 2).toString()) + 1) {
        spaces = 0;
        stars = inputNumber;
      }
      if (i > parseInt((inputNumber / 2).toString()) + 1) {
        spaces = i - parseInt((inputNumber / 2).toString()) - 1;
        stars = inputNumber - 2 * spaces;
      }
      for (let j = 0; j < spaces; j++) {
        pattern = `${pattern}\t`;
      }
      for (let j = 0; j < stars; j++) {
        pattern = `${pattern}*\t`;
      }
      pattern = `${pattern}\n`;
    }
    fs.writeFileSync(
      '/run/media/bhargav/Personal/dsa/src/arrays/output-patterns/program-output-pattern-5.txt',
      pattern
    );
    return pattern;
  }
}
