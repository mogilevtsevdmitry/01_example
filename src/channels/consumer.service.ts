import { RabbitRPC } from '@golevelup/nestjs-rabbitmq';
import { PostFacade } from '@lib/post/application-services';
import { CreatePostDto } from '@lib/post/application-services/commands/dto';
import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class ConsumerService {
  private readonly logger = new Logger(ConsumerService.name);
  constructor(private readonly postFacade: PostFacade) {}

  @RabbitRPC({
    exchange: 'post',
    routingKey: 'create-post',
    queue: 'create-post',
  })
  private async createPost(post: CreatePostDto) {
    try {
      const createdPost = await this.postFacade.commands.createPost(post);
      return createdPost;
    } catch (error) {
      this.logger.error(error);
      return null;
    }
  }
}
