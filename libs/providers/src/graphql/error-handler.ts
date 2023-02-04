import { Logger } from '@nestjs/common';
import { GraphQLError } from 'graphql';

export const gqlErrorHandler = (error: GraphQLError) => {
  Logger.warn({ error });
  if ('response' in error.extensions) {
    const { message, ...response } = error.extensions['response'] as {
      message: string;
      // eslint-disable-next-line @typescript-eslint/ban-types
      response: Object;
    };
    return {
      message,
      extensions: {
        timestamp: new Date().toDateString(),
        ...response,
      },
    };
  }
  return error;
};
