import { ConfigService } from '@nestjs/config';
import { JwtModuleAsyncOptions } from '@nestjs/jwt';

export const jwtFactory: JwtModuleAsyncOptions = {
  inject: [ConfigService],
  useFactory: (config: ConfigService) => ({
    secret: config.get<string>('JWT_ACCESS_TOKEN_SECRET'),
    signOptions: {
      expiresIn: config.get<string>('JWT_ACCESS_EXPIRES_IN', '1d'),
    },
  }),
};
