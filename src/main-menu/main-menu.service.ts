import { Injectable } from '@nestjs/common';
import readline from 'readline';

@Injectable()
export class MainMenuService {
  rl: readline.Interface;

  constructor() {
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
      terminal: true
    });
  }
  askQuestion(inputQuestion: string) {
    return new Promise((resolve, reject) => {
      this.rl.question(inputQuestion, (input) => {
        resolve(input);
      });
    });
  }
  closeRl() {
    this.rl.close();
  }
  writeToRl(data: string) {
    this.rl.write(data);
  }

  async initiateAskQuestion(question: string) {
    const input = await this.askQuestion(question);
    this.closeRl();
  }
}
