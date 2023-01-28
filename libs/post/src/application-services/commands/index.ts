import { Type } from '@nestjs/common';
import { ICommandHandler } from '@nestjs/cqrs';

export const POST_COMMANDS_HANDLERS: Type<ICommandHandler>[] = [];
