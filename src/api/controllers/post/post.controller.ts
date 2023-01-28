import { PostFacade } from '@lib/post/application-services';
import { Controller } from '@nestjs/common';

@Controller('post')
export class PostController {
  constructor(private readonly postFacade: PostFacade) {}
}
