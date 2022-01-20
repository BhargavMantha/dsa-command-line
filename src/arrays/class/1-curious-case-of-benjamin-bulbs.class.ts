import { MainMenuService } from '../../main-menu/main-menu.service';

/**
 * TODO:1. You are given n number of bulbs. They are all switched off. A weird fluctuation in voltage hits the circuit n times. In the 1st fluctuation all bulbs are toggled, in the 2nd fluctuation every 2nd bulb is toggled, in the 3rd fluctuation every 3rd bulb is toggled and so on. You've to find which bulbs will be switched on after n fluctuations.
 * TODO:2. Take as input a number n, representing the number of bulbs.
 * TODO:3. Print all the bulbs that will be on after the nth fluctuation in voltage.
 */
export class CuriousCaseOfBenjaminBulbs {
  mainMenuService: MainMenuService;
  numberOfOnBulbs = [];
  constructor() {
    this.mainMenuService = new MainMenuService();
  }
  async takeNumberOfBulbsAsInput() {
    try {
      const input = await this.mainMenuService.askQuestion(
        'Please enter the number of bulbs: '
      );
      this.mainMenuService.closeRl();
      return input;
    } catch (error) {
      console.log(error);
    }
  }
  bulbsOnAfterNthFluctuation(numberOfBulbs: number) {
    const bulbs = [];
    for (let i = 0; i < numberOfBulbs; i++) {
      bulbs.push('OFF');
    }
    for (let i = 0; i < numberOfBulbs; i++) {
      for (let j = 0 + i; j < numberOfBulbs; j = j + i + 1) {
        if (bulbs[j] === 'OFF') bulbs[j] = 'ON';
        else if (bulbs[j] === 'ON') bulbs[j] = 'OFF';
      }
    }
    for (let i = 0; i < bulbs.length; i++)
      if (bulbs[i] === 'ON') this.numberOfOnBulbs.push(i + 1);
    return this.numberOfOnBulbs;
  }
}
