import { Module } from '@nestjs/common';
import { BarangsService } from './barangs.service';
import { BarangsController } from './barangs.controller';
import { Barang } from './entities/barang.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Barang])],
  controllers: [BarangsController],
  providers: [BarangsService],
})
export class BarangsModule {}
