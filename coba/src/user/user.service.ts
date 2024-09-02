import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    // return 'This action adds a new user';
    return await this.userRepository.save(createUserDto);
  }

  async login(email: string, password:string) {
    if((await this.userRepository.find({where:{email,password}})).length==1){
      return true;
    }
    return false;
    // const data=await this.userRepository.findOne({where:{email,password}});
    // console.log(data);
    
    // return data;

  }

  async findAll() {
    // return `This action returns all user`;
    return await this.userRepository.find();
  }

  async findOne(id: number) {
    // return `This action returns a #${id} user`;
    return await this.userRepository.findOne({where:{id}})
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    // return `This action updates a #${id} user`;
    const toUpdate = await this.userRepository.findOne({ where: { id } });

    const updated = Object.assign(toUpdate, updateUserDto);

    return await this.userRepository.save(updated);
  }

  async remove(id: number) {
    // return `This action removes a #${id} user`;
    return await this.userRepository.delete(id);
  }
}
