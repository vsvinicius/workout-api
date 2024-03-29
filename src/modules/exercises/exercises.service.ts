import { Injectable } from '@nestjs/common';
import { CreateExerciseDto } from './dto/create-exercise.dto';
import { UpdateExerciseDto } from './dto/update-exercise.dto';
import { ExercisesRepository } from 'src/shared/database/repositories/exercises.repository';

@Injectable()
export class ExercisesService {
  constructor(private readonly exerciseRepo: ExercisesRepository) {}
  create(createExerciseDto: CreateExerciseDto) {
    const { name, reps, sets, workoutId, muscleGroup } = createExerciseDto;
    return this.exerciseRepo.create({
      data: {
        name,
        reps,
        sets,
        workoutId,
        muscleGroup,
      },
    });
  }

  findByWorkout(workoutId: string) {
    console.debug({ workoutId });
    return this.exerciseRepo.findMany({ where: { workoutId } });
  }

  findOne(exerciseId: string) {
    return this.exerciseRepo.findFirst({ where: { id: exerciseId } });
  }

  update(exerciseId: string, updateExerciseDto: UpdateExerciseDto) {
    const { name, reps, sets } = updateExerciseDto;
    return this.exerciseRepo.update({
      where: { id: exerciseId },
      data: { name, reps, sets },
    });
  }

  remove(exerciseId: string) {
    return this.exerciseRepo.delete({ where: { id: exerciseId } });
  }
}
