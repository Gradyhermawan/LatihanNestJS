import { Injectable } from '@nestjs/common';
import { CreateBahanDto } from './dto/create-bahan.dto';
import { UpdateBahanDto } from './dto/update-bahan.dto';

@Injectable()
export class BahanService {
  create(createBahanDto: CreateBahanDto) {
    return 'This action adds a new bahan';
  }

  findAll() {
    return `This action returns all bahan`;
  }

  findOne(id: number) {
    return `This action returns a #${id} bahan`;
  }

  update(id: number, updateBahanDto: UpdateBahanDto) {
    return `This action updates a #${id} bahan`;
  }

  remove(id: number) {
    return `This action removes a #${id} bahan`;
  }
}
