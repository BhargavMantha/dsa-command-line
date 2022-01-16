import { MainMenuModule } from 'src/main-menu/main-menu.module';
import { MainMenuService } from 'src/main-menu/main-menu.service';

export const moduleMap = {
  0: {
    key: 'back-To-main-menu',
    title: 'Back to main menu',
    module: MainMenuModule,
    service: MainMenuService
  }
};
