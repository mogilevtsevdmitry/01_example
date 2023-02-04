import { AmqpBaseRequest } from './amqp-base-request.interface';

export interface AmqpBaseResponse<T = unknown> extends AmqpBaseRequest<T> {
  error?: {
    code: string;
    message: string;
  };
}
