import { randomStringGenerator } from '@nestjs/common/utils/random-string-generator.util';
import { UpdatePostDto as IUpdatePostDto } from '@lib/post/application-services/commands/dto';
import { ApiProperty } from '@nestjs/swagger';
import { ApiPropertyOptional } from '@nestjs/swagger/dist';
import { IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';

export class UpdatePostDto implements IUpdatePostDto {
  @ApiProperty({
    description: 'Идентификатор поста',
    type: 'string',
    example: randomStringGenerator(),
  })
  @IsUUID()
  id: string;

  @IsUUID()
  authorId: string;

  @ApiPropertyOptional({ description: 'Заголовок поста', type: 'string' })
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  title: string;

  @ApiPropertyOptional({ description: 'Сообщение поста', type: 'string' })
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  message: string;
}
