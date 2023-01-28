import { PostAggregate } from '@lib/post/domain';
import { PostRepository } from '@lib/post/providers';
import { BadRequestException, Logger } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { UpdatePostCommand } from './update-post.command';

@CommandHandler(UpdatePostCommand)
export class UpdatePostCommandHandler
  implements ICommandHandler<UpdatePostCommand, PostAggregate>
{
  private readonly logger = new Logger(UpdatePostCommandHandler.name);
  constructor(private readonly postRepository: PostRepository) {}

  async execute({ post }: UpdatePostCommand): Promise<PostAggregate> {
    const existPost = await this.postRepository
      .findOne(post.id)
      .catch((err) => {
        this.logger.error(err);
        return null as PostAggregate;
      });
    if (!existPost) {
      throw new BadRequestException(`Post by id ${post.id} not found!`);
    }
    Object.assign(existPost, post);
    const postAggregate = PostAggregate.create(existPost);
    await this.postRepository.save(postAggregate);
    return postAggregate;
  }
}
