import { Module } from '@nestjs/common';
import { IsNumberPrimeService } from './is-number-prime.service';

@Module({
  providers: [IsNumberPrimeService]
})
export class IsNumberPrimeModule {}
