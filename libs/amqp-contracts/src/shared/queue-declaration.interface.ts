import { QueueOptions } from '@golevelup/nestjs-rabbitmq';
import { RabbitExchangeConfig } from './rabbit-exchange-config.interface';

export interface QueueDeclaration {
  exchange: RabbitExchangeConfig;
  routingKey: string;
  queue: string;
  queueOptions: QueueOptions;
}
