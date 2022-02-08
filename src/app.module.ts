import { Module } from '@nestjs/common';
import { IsNumberPrimeModule } from './is-number-prime/is-number-prime.module';
import { MainMenuModule } from './main-menu/main-menu.module';
import { LinkedListModule } from './linked-list/linked-list.module';
import { ArraysModule } from './arrays/arrays.module';
import { QueueModule } from './queue/queue.module';
import { TreeModule } from './tree/tree.module';
import { BinaryTreeModule } from './binart-tree/binary-tree.module';
import { StackModule } from './stack/stack.module';

@Module({
  imports: [
    IsNumberPrimeModule,
    MainMenuModule,
    LinkedListModule,
    ArraysModule,
    QueueModule,
    TreeModule,
    BinaryTreeModule,
    StackModule
  ]
})
export class AppModule {}
