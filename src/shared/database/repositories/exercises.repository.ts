import { Injectable } from '@nestjs/common';
import { type Prisma } from 'prisma/prisma-client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class ExercisesRepository {
  constructor(private readonly prismaService: PrismaService) {}

  findMany<T extends Prisma.ExerciseFindManyArgs>(
    findManyDto: Prisma.SelectSubset<T, Prisma.ExerciseFindManyArgs>,
  ) {
    return this.prismaService.exercise.findMany(findManyDto);
  }

  findFirst(findFirstDto: Prisma.ExerciseFindFirstArgs) {
    return this.prismaService.exercise.findFirst(findFirstDto);
  }

  create(createExerciseDto: Prisma.ExerciseCreateArgs) {
    return this.prismaService.exercise.create(createExerciseDto);
  }
  update(updateExerciseDto: Prisma.ExerciseUpdateArgs) {
    return this.prismaService.exercise.update(updateExerciseDto);
  }
  delete(deleteDto: Prisma.ExerciseDeleteArgs) {
    return this.prismaService.exercise.delete(deleteDto);
  }
}
