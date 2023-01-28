import { CreatePostDto as ICreatePostDto } from '@lib/post/application-services/commands/dto';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreatePostDto implements ICreatePostDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  message: string;

  @IsUUID()
  authorId: string;
}
