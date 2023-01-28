import { Type } from 'class-transformer';
import { IsNumber, IsOptional, Min, IsPositive } from 'class-validator';

export class PaginationDto {
  @IsOptional()
  @Min(0)
  @IsNumber({ allowNaN: false, allowInfinity: false })
  @Type(() => Number)
  offset = 0;

  @IsOptional()
  @IsNumber({ allowNaN: false, allowInfinity: false })
  @Type(() => Number)
  @IsPositive()
  limit = 15;
}
