import { plainToInstance } from 'class-transformer';
import { CurrentUser, ICurrentUser, Public } from '@lib/auth';
import { JwtGuard } from '@lib/auth/guards/jwt.guard';
import { PostFacade } from '@lib/post/application-services';
import { PaginationDto } from '@lib/shared/dto';
import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { UseGuards } from '@nestjs/common/decorators/core/use-guards.decorator';
import { ParseUUIDPipe } from '@nestjs/common/pipes/parse-uuid.pipe';
import { CreatePostDto, UpdatePostDto } from './dto';
import { ResponseWithPaginaton } from '@lib/shared';
import { PostAggregate } from '@lib/post';

@UseGuards(JwtGuard)
@Controller('post')
export class PostController {
  constructor(private readonly postFacade: PostFacade) {}

  @Post()
  createPost(
    @CurrentUser() user: ICurrentUser,
    @Body() createPostDto: CreatePostDto,
  ) {
    return this.postFacade.commands.createPost({
      ...createPostDto,
      authorId: user.userId,
    });
  }

  @Public()
  @Get(':id')
  getPostById(@Param('id', ParseUUIDPipe) id: string) {
    return this.postFacade.queries.getOnePost(id);
  }

  @Public()
  @Get()
  async getAllPosts(
    @Query() paginationDto: PaginationDto,
  ): Promise<ResponseWithPaginaton<PostAggregate>> {
    const pagination = plainToInstance(PaginationDto, paginationDto);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const [data, count] = await this.postFacade.queries.getAllPosts(pagination);
    return {
      ...pagination,
      data,
      total: count,
    };
  }

  @Put()
  updatePost(
    @CurrentUser() user: ICurrentUser,
    @Body() updatePost: UpdatePostDto,
  ) {
    return this.postFacade.commands.updatePost({
      ...updatePost,
      authorId: user.userId,
    });
  }

  @Patch(':id')
  setPublished(@Param('id', ParseUUIDPipe) id: string) {
    return this.postFacade.commands.setPublished(id);
  }
}
