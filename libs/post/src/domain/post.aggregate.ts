import { randomStringGenerator } from '@nestjs/common/utils/random-string-generator.util';
import { IPost } from './post.interface';
import { PostServices } from './services';

export class PostAggregate extends PostServices implements IPost {
  id: string = randomStringGenerator();
  title: string;
  message: string;
  authorId: string;
  published = false;
  createdAt = new Date().toISOString();
  updatedAt = new Date().toISOString();

  private constructor() {
    super();
  }

  static create(post: Partial<IPost>) {
    const _post = new PostAggregate();
    _post.setNotPublished();
    Object.assign(_post, post);
    return _post;
  }
}
