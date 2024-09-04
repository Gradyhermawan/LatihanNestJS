import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { BarangsModule } from './barangs/barangs.module';
import { Barang } from './barangs/entities/barang.entity';
import { KayuModule } from './kayu/kayu.module';
import { Kayu } from './kayu/entities/kayu.entity';
import { SepatuModule } from './sepatu/sepatu.module';
import { Sepatu } from './sepatu/entities/sepatu.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'coba',
      entities: [User,Barang,Kayu,Sepatu],
      synchronize: true,
    }),
    UserModule,
    BarangsModule,
    KayuModule,
    SepatuModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
