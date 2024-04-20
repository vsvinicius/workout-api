import { Injectable } from '@nestjs/common';
import { CreatePersonalRecordDto } from './dto/create-personal-record.dto';
import { UpdatePersonalRecordDto } from './dto/update-personal-record.dto';
import { PersonalRecordsRepository } from 'src/shared/database/repositories/personal-records.repository';

@Injectable()
export class PersonalRecordsService {
  constructor(private readonly personalRecordRepo: PersonalRecordsRepository) {}

  create(createPersonalRecordDto: CreatePersonalRecordDto) {
    const { exerciseId, unit, weight } = createPersonalRecordDto;
    return this.personalRecordRepo.create({
      data: { exerciseId, unit, weight },
    });
  }

  findAllByExercise(exerciseId: string) {
    return this.personalRecordRepo.findMany({ where: { exerciseId } });
  }

  findOne(id: string) {
    return this.personalRecordRepo.findFirst({ where: { id } });
  }

  update(id: string, updatePersonalRecordDto: UpdatePersonalRecordDto) {
    const { unit } = updatePersonalRecordDto;
    return this.personalRecordRepo.update({ data: { unit }, where: { id } });
  }

  remove(id: string) {
    return this.personalRecordRepo.delete({ where: { id } });
  }
}
