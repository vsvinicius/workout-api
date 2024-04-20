import { OmitType } from '@nestjs/mapped-types';
import { CreatePersonalRecordDto } from './create-personal-record.dto';

export class UpdatePersonalRecordDto extends OmitType(CreatePersonalRecordDto, [
  'weight',
  'exerciseId',
]) {}
