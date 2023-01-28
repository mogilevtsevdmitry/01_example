import { PaginationDto } from '../dto';

export class ResponseWithPaginaton<T> extends PaginationDto {
  total!: number;

  data: T[];
}
