import { AggregateRoot } from '@nestjs/cqrs';
import { PLAIN_TO_INSTANCE } from './plain-to-instance.case';
import { ISetNotBublished, SET_NOT_PUBLISHED } from './set-not-published.case';
import { ISetBublished, SET_PUBLISHED } from './set-published.case';

export class PostServices
  extends AggregateRoot
  implements ISetNotBublished, ISetBublished
{
  setNotPublished = SET_NOT_PUBLISHED;
  setPublished = SET_PUBLISHED;
  plainToInstance = PLAIN_TO_INSTANCE;
}
