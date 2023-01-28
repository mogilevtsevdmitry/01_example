import { Type } from '@nestjs/common';
import { IQueryHandler } from '@nestjs/cqrs';

export const POST_QUERIES_HANDLERS: Type<IQueryHandler>[] = [];
