import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { UsersRepository } from './repositories/users.repository';
import { WorkoutsRepository } from './repositories/workouts.repository';
import { ExercisesRepository } from './repositories/exercises.repository';

@Global()
@Module({
  providers: [
    PrismaService,
    UsersRepository,
    WorkoutsRepository,
    ExercisesRepository,
  ],
  exports: [UsersRepository, WorkoutsRepository, ExercisesRepository],
})
export class DatabaseModule {}
