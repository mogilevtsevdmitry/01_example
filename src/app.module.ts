import { ProvidersModule } from '@lib/providers';
import { Module } from '@nestjs/common';

@Module({
  imports: [ProvidersModule],
})
export class AppModule {}
