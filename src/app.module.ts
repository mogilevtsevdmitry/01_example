import { ProvidersModule } from '@lib/providers';
import { SharedModule } from '@lib/shared';
import { Module } from '@nestjs/common';
import { ApiModule } from './api';

@Module({
  imports: [SharedModule, ProvidersModule, ApiModule],
})
export class AppModule {}
