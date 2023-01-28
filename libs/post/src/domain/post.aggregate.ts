import { randomStringGenerator } from '@nestjs/common/utils/random-string-generator.util';
import { AggregateRoot } from '@nestjs/cqrs';
import { IPost } from './post.interface';

export class PostAggregate extends AggregateRoot implements IPost {
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
    Object.assign(_post, post);
    return _post;
  }
}
