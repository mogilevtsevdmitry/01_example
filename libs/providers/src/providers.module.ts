import { ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { apolloDriverConfig } from './graphql';
import { TypeormModule } from './typeorm/typeorm.module';
import { AmqpModule } from './amqp/amqp.module';

@Module({
  imports: [
    TypeormModule,
    GraphQLModule.forRoot<ApolloDriverConfig>(apolloDriverConfig),
    AmqpModule,
  ],
})
export class ProvidersModule {}
