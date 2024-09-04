import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SepatuService } from './sepatu.service';
import { CreateSepatuDto } from './dto/create-sepatu.dto';
import { UpdateSepatuDto } from './dto/update-sepatu.dto';

@Controller('sepatu')
export class SepatuController {
  constructor(private readonly sepatuService: SepatuService) {}

  @Post()
  create(@Body() createSepatuDto: CreateSepatuDto) {
    return this.sepatuService.create(createSepatuDto);
  }

  @Get()
  findAll() {
    return this.sepatuService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sepatuService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSepatuDto: UpdateSepatuDto) {
    return this.sepatuService.update(+id, updateSepatuDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sepatuService.remove(+id);
  }
}
