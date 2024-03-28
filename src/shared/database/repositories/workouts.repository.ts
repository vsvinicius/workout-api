import { Injectable } from '@nestjs/common';
import { type Prisma } from 'prisma/prisma-client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class WorkoutsRepository {
  constructor(private readonly prismaService: PrismaService) {}

  findMany<T extends Prisma.WorkoutFindManyArgs>(
    findManyDto: Prisma.SelectSubset<T, Prisma.WorkoutFindManyArgs>,
  ) {
    return this.prismaService.workout.findMany(findManyDto);
  }

  findFirst(findFirstDto: Prisma.WorkoutFindFirstArgs) {
    return this.prismaService.workout.findFirst(findFirstDto);
  }

  create(createWorkoutDto: Prisma.WorkoutCreateArgs) {
    return this.prismaService.workout.create(createWorkoutDto);
  }
  update(updateWorkoutDto: Prisma.WorkoutUpdateArgs) {
    return this.prismaService.workout.update(updateWorkoutDto);
  }
  delete(deleteDto: Prisma.WorkoutDeleteArgs) {
    return this.prismaService.workout.delete(deleteDto);
  }
}
