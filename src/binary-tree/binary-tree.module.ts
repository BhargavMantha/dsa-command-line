import { Module } from '@nestjs/common';
import { BinaryTreeService } from './binary-tree.service';

@Module({
  providers: [BinaryTreeService]
})
export class BinaryTreeModule {}
