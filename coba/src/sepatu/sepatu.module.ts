import { Module } from '@nestjs/common';
import { SepatuService } from './sepatu.service';
import { SepatuController } from './sepatu.controller';
import { Sepatu } from './entities/sepatu.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Sepatu])],
  controllers: [SepatuController],
  providers: [SepatuService],
})
export class SepatuModule {}
