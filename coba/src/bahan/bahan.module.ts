import { Module } from '@nestjs/common';
import { BahanService } from './bahan.service';
import { BahanController } from './bahan.controller';

@Module({
  controllers: [BahanController],
  providers: [BahanService],
})
export class BahanModule {}
