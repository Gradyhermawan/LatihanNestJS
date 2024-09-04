import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { KayuService } from './kayu.service';
import { CreateKayuDto } from './dto/create-kayu.dto';
import { UpdateKayuDto } from './dto/update-kayu.dto';

@Controller('kayu')
export class KayuController {
  constructor(private readonly kayuService: KayuService) {}

  @Post()
  create(@Body() createKayuDto: CreateKayuDto) {
    createKayuDto.arrived_date=new Date(createKayuDto.arrived_date);
    return this.kayuService.create(createKayuDto);
  }

  @Get()
  findAll() {
    return this.kayuService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.kayuService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateKayuDto: UpdateKayuDto) {
    return this.kayuService.update(+id, updateKayuDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.kayuService.remove(+id);
  }
}
