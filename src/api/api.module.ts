import { AuthModule } from '@lib/auth';
import { Module } from '@nestjs/common';
import { ControllersModule } from './controllers';
import { ResolversModule } from './resolvers';

@Module({
  imports: [ControllersModule, AuthModule, ResolversModule],
})
export class ApiModule {}
