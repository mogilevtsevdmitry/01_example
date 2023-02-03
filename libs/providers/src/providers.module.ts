import { ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { apolloDriverConfig } from './graphql';
import { TypeormModule } from './typeorm/typeorm.module';

@Module({
  imports: [
    TypeormModule,
    GraphQLModule.forRoot<ApolloDriverConfig>(apolloDriverConfig),
  ],
})
export class ProvidersModule {}
