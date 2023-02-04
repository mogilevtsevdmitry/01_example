import { Reflector } from '@nestjs/core';
import { GqlExecutionContext } from '@nestjs/graphql';
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Observable } from 'rxjs';
import { isPublic } from '../decorators';

@Injectable()
export class GqlGuard extends AuthGuard('jwt') implements CanActivate {
  constructor(private reflector: Reflector) {
    super();
  }
  getRequest(ctx: ExecutionContext) {
    const _ctx = GqlExecutionContext.create(ctx);
    return _ctx.getContext().req;
  }

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const _isPublic = isPublic(context, this.reflector);
    if (_isPublic) {
      return true;
    }
    return super.canActivate(context);
  }
}
