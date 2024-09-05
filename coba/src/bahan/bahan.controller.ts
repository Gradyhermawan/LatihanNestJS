import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BahanService } from './bahan.service';
import { CreateBahanDto } from './dto/create-bahan.dto';
import { UpdateBahanDto } from './dto/update-bahan.dto';

@Controller('bahan')
export class BahanController {
  constructor(private readonly bahanService: BahanService) {}

  @Post()
  create(@Body() createBahanDto: CreateBahanDto) {
    return this.bahanService.create(createBahanDto);
  }

  @Get()
  findAll() {
    return this.bahanService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bahanService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBahanDto: UpdateBahanDto) {
    return this.bahanService.update(+id, updateBahanDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bahanService.remove(+id);
  }
}
