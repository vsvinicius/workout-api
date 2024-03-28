import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { UsersRepository } from './repositories/users.repository';
import { WorkoutsRepository } from './repositories/workouts.repository';

@Global()
@Module({
  providers: [PrismaService, UsersRepository, WorkoutsRepository],
  exports: [UsersRepository, WorkoutsRepository],
})
export class DatabaseModule {}
