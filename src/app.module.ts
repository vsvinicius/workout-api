import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { DatabaseModule } from './shared/database/database.module';
import { WorkoutsModule } from './modules/workouts/workouts.module';
import { ExercisesModule } from './modules/exercises/exercises.module';
import { PersonalRecordsModule } from './modules/personal-records/personal-records.module';

@Module({
  imports: [
    UsersModule,
    DatabaseModule,
    WorkoutsModule,
    ExercisesModule,
    PersonalRecordsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
