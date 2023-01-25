import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { appDataSource } from './typeorm.config';

@Module({
  imports: [TypeOrmModule.forRoot(appDataSource.options)],
})
export class TypeormModule {}
