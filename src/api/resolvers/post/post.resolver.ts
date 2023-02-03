import { PostFacade } from '@lib/post/application-services';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { PostResponse } from '../responses/post.response';

@Resolver(() => PostResponse)
export class PostResolver {
  constructor(private readonly postFacade: PostFacade) {}

  @Query(() => PostResponse, { name: 'post' })
  async getPostById(@Args('id') id: string) {
    return this.postFacade.queries.getOnePost(id);
  }
}
