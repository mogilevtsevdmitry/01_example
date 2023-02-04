import { Type } from '@nestjs/common';
import { applyDecorators } from '@nestjs/common/decorators/core/apply-decorators';
import {
  ApiExtraModels,
  ApiOkResponse,
  ApiProperty,
  getSchemaPath,
} from '@nestjs/swagger';
import { PaginationDto } from '../dto';

export class ResponseWithPaginaton<T> extends PaginationDto {
  @ApiProperty({ description: 'Всего записей в БД', type: 'number' })
  total!: number;

  @ApiProperty({
    description: 'Набор двнных',
    default: [],
    isArray: true,
    items: {},
  })
  data: T[];
}

export const ApiOkResponsePaginated = <DataDto extends Type<unknown>>(
  dataDto: DataDto,
) =>
  applyDecorators(
    ApiExtraModels(ResponseWithPaginaton),
    ApiOkResponse({
      schema: {
        allOf: [
          { $ref: getSchemaPath(ResponseWithPaginaton) },
          {
            properties: {
              data: {
                type: 'array',
                items: { $ref: getSchemaPath(dataDto) },
              },
            },
          },
        ],
      },
    }),
  );
