import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersRepository } from 'src/shared/database/repositories/users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepo: UsersRepository) {}

  create(createUserDto: CreateUserDto) {
    return this.usersRepo.create({ data: createUserDto });
  }

  findAll() {
    return this.usersRepo.findAll();
  }

  findOne(userId: string) {
    return this.usersRepo.findFirst({ where: { id: userId } });
  }

  update(userId: string, updateUserDto: UpdateUserDto) {
    const { name } = updateUserDto;
    return this.usersRepo.update({ where: { id: userId }, data: { name } });
  }

  remove(userId: string) {
    return this.usersRepo.delete({ where: { id: userId } });
  }
}
