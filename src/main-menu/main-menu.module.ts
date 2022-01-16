import { Module } from '@nestjs/common';
import { MainMenuService } from './main-menu.service';

@Module({
  providers: [MainMenuService]
})
export class MainMenuModule {}
