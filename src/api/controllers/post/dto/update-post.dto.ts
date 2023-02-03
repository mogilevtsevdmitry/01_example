import { UpdatePostDto as IUpdatePostDto } from '@lib/post/application-services/commands/dto';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class UpdatePostDto implements IUpdatePostDto {
  @IsUUID()
  id: string;

  @IsUUID()
  authorId: string;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  message: string;
}
