import { Injectable } from '@nestjs/common';
import { CreateSepatuDto } from './dto/create-sepatu.dto';
import { UpdateSepatuDto } from './dto/update-sepatu.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Sepatu } from './entities/sepatu.entity';

@Injectable()
export class SepatuService {
  constructor(
    @InjectRepository(Sepatu)
    private sepatuRepository: Repository<Sepatu>,
  ) {}
  create(createSepatuDto: CreateSepatuDto) {
    return 'This action adds a new sepatu';
  }

  async findAll() {
    // return `This action returns all sepatu`;
    return await this.sepatuRepository.find();

  }

  findOne(id: number) {
    return `This action returns a #${id} sepatu`;
  }

  update(id: number, updateSepatuDto: UpdateSepatuDto) {
    return `This action updates a #${id} sepatu`;
  }

  remove(id: number) {
    return `This action removes a #${id} sepatu`;
  }
}
