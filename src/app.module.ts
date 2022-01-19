import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IsNumberPrimeModule } from './is-number-prime/is-number-prime.module';
import { MainMenuModule } from './main-menu/main-menu.module';
import { LinkedListModule } from './linked-list/linked-list.module';

@Module({
  imports: [IsNumberPrimeModule, MainMenuModule, LinkedListModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
