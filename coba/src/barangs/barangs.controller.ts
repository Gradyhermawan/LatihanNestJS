import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BarangsService } from './barangs.service';
import { CreateBarangDto } from './dto/create-barang.dto';
import { UpdateBarangDto } from './dto/update-barang.dto';

@Controller('barangs')
export class BarangsController {
  constructor(private readonly barangsService: BarangsService) {}

  
  @Post()
  create(@Body() createBarangDto: CreateBarangDto) {
    return this.barangsService.create(createBarangDto);
  }

  @Get()
  findAll() {
    return this.barangsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.barangsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBarangDto: UpdateBarangDto) {
    return this.barangsService.update(+id, updateBarangDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.barangsService.remove(+id);
  }
}
