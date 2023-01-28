import { Module } from '@nestjs/common';
import { PostController } from './post/post.controller';

@Module({
  controllers: [PostController],
})
export class ControllersModule {}
