import { Module } from '@nestjs/common';
import { StackService } from './stack.service';

@Module({
  providers: [StackService]
})
export class StackModule {}
