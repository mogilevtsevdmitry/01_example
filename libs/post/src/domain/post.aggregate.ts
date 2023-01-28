import { DomainError } from '@lib/errors';
import { randomStringGenerator } from '@nestjs/common/utils/random-string-generator.util';
import { Exclude } from 'class-transformer';
import { IsUUID, validateSync } from 'class-validator';
import {
  IsBoolean,
  IsNotEmpty,
  IsString,
} from 'class-validator/types/decorator/decorators';
import { IPost } from './post.interface';
import { PostServices } from './services';

export class PostAggregate extends PostServices implements IPost {
  @IsUUID()
  id: string = randomStringGenerator();

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  message: string;

  @IsUUID()
  @IsNotEmpty()
  authorId: string;

  @IsBoolean()
  @Exclude()
  published = false;

  @IsString()
  createdAt = new Date().toISOString();

  @IsString()
  updatedAt = new Date().toISOString();

  private constructor() {
    super();
  }

  static create(post: Partial<IPost>) {
    const _post = new PostAggregate();
    Object.assign(_post, post);
    _post.updatedAt = post?.id ? new Date().toISOString() : _post.updatedAt;
    const errors = validateSync(_post, { whitelist: true });
    if (!!errors.length) {
      throw new DomainError(errors, 'Post not valid');
    }
    return _post;
  }
}
