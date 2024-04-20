import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { UsersRepository } from './repositories/users.repository';
import { WorkoutsRepository } from './repositories/workouts.repository';
import { ExercisesRepository } from './repositories/exercises.repository';
import { PersonalRecordsRepository } from './repositories/personal-records.repository';

@Global()
@Module({
  providers: [
    PrismaService,
    UsersRepository,
    WorkoutsRepository,
    ExercisesRepository,
    PersonalRecordsRepository,
  ],
  exports: [
    UsersRepository,
    WorkoutsRepository,
    ExercisesRepository,
    PersonalRecordsRepository,
  ],
})
export class DatabaseModule {}
