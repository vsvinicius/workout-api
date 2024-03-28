import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { DatabaseModule } from './shared/database/database.module';
import { WorkoutsModule } from './modules/workouts/workouts.module';

@Module({
  imports: [UsersModule, DatabaseModule, WorkoutsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
