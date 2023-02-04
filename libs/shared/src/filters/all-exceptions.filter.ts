import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { Request } from 'express';

@Catch()
export class AllExceptionsFilter<T> implements ExceptionFilter {
  private readonly logger = new Logger(AllExceptionsFilter.name);
  catch(exception: T, host: ArgumentsHost) {
    this.logger.error(exception);
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;
    if (['graphql'].includes(host.getType())) {
      throw new HttpException(
        this._response(status, request, exception),
        status,
      );
    }
    response.status(status).json(this._response(status, request, exception));
  }

  private _response(status: number, request: Request, exception: any) {
    return {
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request?.url,
      method: request?.method,
      params: request?.params,
      query: request?.query,
      exception: {
        name: exception['name'],
        message: exception['message'],
      },
    };
  }
}
