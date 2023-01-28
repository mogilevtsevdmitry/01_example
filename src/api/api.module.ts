import { AuthModule } from '@lib/auth';
import { Module } from '@nestjs/common';
import { ControllersModule } from './controllers';

@Module({
  imports: [ControllersModule, AuthModule],
})
export class ApiModule {}
