import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IsNumberPrimeModule } from './is-number-prime/is-number-prime.module';
import { MainMenuModule } from './main-menu/main-menu.module';

@Module({
  imports: [IsNumberPrimeModule, MainMenuModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
