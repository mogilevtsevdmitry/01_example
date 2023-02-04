import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

export const GqlCurrentUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const reqCtx = GqlExecutionContext.create(ctx);
    return reqCtx.getContext().req.user;
  },
);
