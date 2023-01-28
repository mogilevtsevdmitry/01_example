import { Module } from '@nestjs/common';
import { ControllersModule } from './controllers';

@Module({
  imports: [ControllersModule],
})
export class ApiModule {}
