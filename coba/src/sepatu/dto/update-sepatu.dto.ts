import { PartialType } from '@nestjs/mapped-types';
import { CreateSepatuDto } from './create-sepatu.dto';

export class UpdateSepatuDto extends PartialType(CreateSepatuDto) {}
