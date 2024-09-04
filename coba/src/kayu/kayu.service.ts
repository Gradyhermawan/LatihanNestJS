import { Injectable } from '@nestjs/common';
import { CreateKayuDto } from './dto/create-kayu.dto';
import { UpdateKayuDto } from './dto/update-kayu.dto';
import { Kayu } from './entities/kayu.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class KayuService {
  constructor(
    @InjectRepository(Kayu)
    private kayuRepository: Repository<Kayu>,
  ) {}
  async create(createKayuDto: CreateKayuDto) {
    return await this.kayuRepository.save(createKayuDto);
    // return 'This action adds a new kayu';
  }

  async findAll() {
    return await this.kayuRepository.find();
    // return `This action returns all kayu`; 
  }

  findOne(id: number) {
    return `This action returns a #${id} kayu`;
  }

  update(id: number, updateKayuDto: UpdateKayuDto) {
    return `This action updates a #${id} kayu`;
  }

  remove(id: number) {
    return `This action removes a #${id} kayu`;
  }
}
