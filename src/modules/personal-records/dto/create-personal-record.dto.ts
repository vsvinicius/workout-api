import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreatePersonalRecordDto {
  @IsString()
  @IsNotEmpty()
  weight: string;

  @IsString()
  @IsNotEmpty()
  unit: string;

  @IsUUID()
  @IsNotEmpty()
  exerciseId: string;
}
