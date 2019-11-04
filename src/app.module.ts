import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as path from 'path';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule
      .forRoot({
        type: 'postgres',
        url: process.env.DATABASE_URL,
        logging: true,
        synchronize: true,
        entities: [path.resolve(__dirname, '**/*.entity{.ts,.js}')],
      }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
