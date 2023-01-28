import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { jwtFactory } from './config';
import { GUARDS } from './guards';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync(jwtFactory),
  ],
  providers: [AuthService, ...GUARDS],
  exports: [AuthService],
})
export class AuthModule {}
