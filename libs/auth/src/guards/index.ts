import { GqlGuard } from './gql.guard';
import { JwtGuard } from './jwt.guard';

export const GUARDS = [JwtGuard, GqlGuard];
