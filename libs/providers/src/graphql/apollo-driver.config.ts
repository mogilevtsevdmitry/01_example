import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { gqlErrorHandler } from './error-handler';

export const apolloDriverConfig: ApolloDriverConfig = {
  driver: ApolloDriver,
  autoSchemaFile: join(
    process.cwd(),
    'libs',
    'providers',
    'src',
    'graphql',
    'schema.gql',
  ),
  sortSchema: true,
  context: ({ req, res }) => ({ req, res }),
  formatError: gqlErrorHandler,
};
