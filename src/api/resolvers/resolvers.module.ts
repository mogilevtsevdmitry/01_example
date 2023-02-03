import { Module } from '@nestjs/common';
import { PostResolver } from './post/post.resolver';

@Module({
  providers: [PostResolver]
})
export class ResolversModule {}
