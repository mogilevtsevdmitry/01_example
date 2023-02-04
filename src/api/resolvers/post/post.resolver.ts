import { randomStringGenerator } from '@nestjs/common/utils/random-string-generator.util';
import { PostFacade } from '@lib/post/application-services';
import { PaginationDto } from '@lib/shared';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { plainToInstance } from 'class-transformer';
import { CreatePostInput } from '../inputs';
import { PginatedPosts, PostResponse } from '../responses';

@Resolver(() => PostResponse)
export class PostResolver {
  constructor(private readonly postFacade: PostFacade) {}

  @Query(() => PostResponse, { name: 'post' })
  async getPostById(@Args('id') id: string) {
    return this.postFacade.queries.getOnePost(id);
  }

  @Query(() => PginatedPosts, { name: 'posts' })
  async getPosts(@Args() paginationDto: PaginationDto) {
    const pagination = plainToInstance(PaginationDto, paginationDto);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const [data, total] = await this.postFacade.queries.getAllPosts(pagination);
    return {
      ...pagination,
      data,
      total,
    };
  }

  @Mutation(() => PostResponse)
  async createPost(@Args('createPostInput') createPostInput: CreatePostInput) {
    return this.postFacade.commands.createPost({
      ...createPostInput,
      authorId: randomStringGenerator(),
    });
  }

  @Mutation(() => PostResponse)
  async setPublishedPost(@Args('id') id: string) {
    return this.postFacade.commands.setPublished(id);
  }
}
