import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { join } from 'path';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/user.entity';
import { UserModule } from './user/user.module';
console.log('hello mysql');

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '774936188',
      database: 'taskOfHuma',
      entities: ['dist/**/*.entity.{ts,js}'],
      synchronize: true,
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
