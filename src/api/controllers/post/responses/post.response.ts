import { ApiProperty } from '@nestjs/swagger';
import { IPost } from '@lib/post';
import { randomStringGenerator } from '@nestjs/common/utils/random-string-generator.util';

export class PostResponse implements Omit<IPost, 'isPublished'> {
  @ApiProperty({
    description: 'Идентификатор поста',
    type: 'string',
    example: randomStringGenerator(),
  })
  id: string;

  @ApiProperty({ description: 'Заголовок поста', type: 'string' })
  title: string;

  @ApiProperty({ description: 'Сообщение поста', type: 'string' })
  message: string;

  @ApiProperty({
    description: 'Идентификатор автора сообщения',
    type: 'string',
    example: randomStringGenerator(),
  })
  authorId: string;

  @ApiProperty({
    description: 'Дата создания поста',
    type: 'string',
    example: new Date().toISOString(),
  })
  createdAt: string;

  @ApiProperty({
    description: 'Дата обновления поста',
    type: 'string',
    example: new Date().toISOString(),
  })
  updatedAt: string;
}
