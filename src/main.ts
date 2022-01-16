import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MainMenuService } from './main-menu/main-menu.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const service = app.get(MainMenuService);
  service.initiateAskQuestion('');
}
bootstrap();
