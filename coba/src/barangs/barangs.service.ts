import { Injectable } from '@nestjs/common';
import { CreateBarangDto } from './dto/create-barang.dto';
import { UpdateBarangDto } from './dto/update-barang.dto';
import { Barang } from './entities/barang.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class BarangsService {
  constructor(
    @InjectRepository(Barang)
    private barangRepository: Repository<Barang>,
    // private userRepository: Repository<User>,
  ) {}
  async create(createBarangDto: CreateBarangDto) {
    // return 'This action adds a new barang';
    return await this.barangRepository.save(createBarangDto);
  }

  async findAll() {
    // return `This action returns all barangs`;
    return await this.barangRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} barang`;
  }

  update(id: number, updateBarangDto: UpdateBarangDto) {
    return `This action updates a #${id} barang`;
  }

  async remove(id: number) {
    // return `This action removes a #${id} barang`;
    return await this.barangRepository.delete(id);

  }
}
