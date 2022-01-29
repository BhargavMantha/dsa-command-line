import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IsNumberPrimeModule } from './is-number-prime/is-number-prime.module';
import { MainMenuModule } from './main-menu/main-menu.module';
import { LinkedListModule } from './linked-list/linked-list.module';
import { ArraysModule } from './arrays/arrays.module';
import { QueueModule } from './queue/queue.module';

@Module({
  imports: [IsNumberPrimeModule, MainMenuModule, LinkedListModule, ArraysModule, QueueModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
