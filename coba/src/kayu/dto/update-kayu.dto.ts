import { PartialType } from '@nestjs/mapped-types';
import { CreateKayuDto } from './create-kayu.dto';

export class UpdateKayuDto extends PartialType(CreateKayuDto) {}
