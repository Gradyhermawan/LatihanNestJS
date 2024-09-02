import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { BarangsModule } from './barangs/barangs.module';
import { Barang } from './barangs/entities/barang.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'coba',
      entities: [User,Barang],
      synchronize: true,
    }),
    UserModule,
    BarangsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
