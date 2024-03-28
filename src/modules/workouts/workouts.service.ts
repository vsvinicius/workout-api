import { Injectable } from '@nestjs/common';
import { CreateWorkoutDto } from './dto/create-workout.dto';
import { UpdateWorkoutDto } from './dto/update-workout.dto';
import { WorkoutsRepository } from 'src/shared/database/repositories/workouts.repository';

@Injectable()
export class WorkoutsService {
  constructor(private readonly workoutsRepo: WorkoutsRepository) {}
  create(createWorkoutDto: CreateWorkoutDto) {
    const { name, userId } = createWorkoutDto;
    return this.workoutsRepo.create({ data: { name, userId } });
  }

  findAllByUser(userId: string) {
    return this.workoutsRepo.findMany({ where: { userId } });
  }

  findOne(id: string) {
    return this.workoutsRepo.findFirst({ where: { id } });
  }

  update(id: string, updateWorkoutDto: UpdateWorkoutDto) {
    const { name } = updateWorkoutDto;
    return this.workoutsRepo.update({ where: { id }, data: { name } });
  }

  remove(id: string) {
    return this.workoutsRepo.delete({ where: { id } });
  }
}
