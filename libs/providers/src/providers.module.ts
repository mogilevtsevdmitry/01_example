import { Module } from '@nestjs/common';
import { ProvidersService } from './providers.service';

@Module({
  providers: [ProvidersService],
  exports: [ProvidersService],
})
export class ProvidersModule {}
