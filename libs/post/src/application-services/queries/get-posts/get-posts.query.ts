import { PaginationDto } from '@lib/shared/dto';

export class GetPostsQuery {
  constructor(public readonly pagination: PaginationDto) {}
}
