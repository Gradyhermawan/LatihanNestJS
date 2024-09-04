import { Module } from '@nestjs/common';
import { KayuService } from './kayu.service';
import { KayuController } from './kayu.controller';
import { Kayu } from './entities/kayu.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Kayu])],
  controllers: [KayuController],
  providers: [KayuService],
})
export class KayuModule {}
