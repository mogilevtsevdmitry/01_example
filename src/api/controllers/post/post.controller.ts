import { CurrentUser, ICurrentUser, Public } from '@lib/auth';
import { JwtGuard } from '@lib/auth/guards/jwt.guard';
import { PostAggregate } from '@lib/post';
import { PostFacade } from '@lib/post/application-services';
import { ApiOkResponsePaginated, ResponseWithPaginaton } from '@lib/shared';
import { PaginationDto } from '@lib/shared/dto';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { UseGuards } from '@nestjs/common/decorators/core/use-guards.decorator';
import { ParseUUIDPipe } from '@nestjs/common/pipes/parse-uuid.pipe';
import {
  ApiBearerAuth,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger/dist';
import { plainToInstance } from 'class-transformer';
import { CreatePostDto, UpdatePostDto } from './dto';
import { PostResponse } from './responses';

@ApiTags('Posts')
@UseGuards(JwtGuard)
@Controller('post')
export class PostController {
  constructor(private readonly postFacade: PostFacade) {}

  @ApiOperation({
    summary: 'Создание поста',
  })
  @ApiBearerAuth()
  @ApiOkResponse({ type: PostResponse })
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

  @ApiOperation({
    summary: 'Получение поста по его идентификатору',
  })
  @ApiOkResponse({ type: PostResponse })
  @Public()
  @Get(':id')
  getPostById(@Param('id', ParseUUIDPipe) id: string) {
    return this.postFacade.queries.getOnePost(id);
  }

  @ApiOperation({
    summary: 'Получение всех постов',
  })
  @ApiOkResponsePaginated(PostResponse)
  @Public()
  @Get()
  async getAllPosts(
    @Query() paginationDto: PaginationDto,
  ): Promise<ResponseWithPaginaton<PostAggregate>> {
    const pagination = plainToInstance(PaginationDto, paginationDto);
    const [data, count] = await this.postFacade.queries.getAllPosts(pagination);
    return {
      ...pagination,
      data,
      total: count,
    };
  }

  @ApiOperation({
    summary: 'Обновление поста',
  })
  @ApiOkResponse({ type: PostResponse })
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

  @ApiOperation({
    summary: 'Установка флага "опубликован" в значении true',
  })
  @ApiOkResponse({ type: PostResponse })
  @Patch(':id')
  setPublished(@Param('id', ParseUUIDPipe) id: string) {
    return this.postFacade.commands.setPublished(id);
  }

  @ApiOperation({
    summary: 'Удаление поста',
  })
  @ApiOkResponse({ type: Boolean })
  @Delete(':id')
  deletePost(@Param('id', ParseUUIDPipe) id: string) {
    return this.postFacade.commands.deletePost(id);
  }
}
