import { RabbitExchangeConfig } from '../shared';

export const EXCHANGE_POST: RabbitExchangeConfig = {
  name: 'post',
  type: 'direct',
};
