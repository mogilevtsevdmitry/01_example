import { PostAggregate } from '@lib/post/domain';
import { PostRepository } from '@lib/post/providers';
import { BadRequestException } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreatePostCommand } from './create-post.command';

@CommandHandler(CreatePostCommand)
export class CreatePostCommandHandler
  implements ICommandHandler<CreatePostCommand, PostAggregate>
{
  constructor(private readonly postRepository: PostRepository) {}

  async execute({ post }: CreatePostCommand): Promise<PostAggregate> {
    const postAggregate = PostAggregate.create(post);
    postAggregate.plainToInstance();
    const createdPost = await this.postRepository
      .save(postAggregate)
      .catch((err) => {
        throw new BadRequestException(err);
      });
    return createdPost;
  }
}
