import { Module } from '@nestjs/common';
import { ArraysService } from './arrays.service';

@Module({
  providers: [ArraysService]
})
export class ArraysModule {}
