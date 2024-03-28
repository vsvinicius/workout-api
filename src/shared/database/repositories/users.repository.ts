import { Injectable } from '@nestjs/common';
import { type Prisma } from 'prisma/prisma-client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class UsersRepository {
  constructor(private readonly prismaService: PrismaService) {}

  findMany<T extends Prisma.UserFindManyArgs>(
    findManyDto: Prisma.SelectSubset<T, Prisma.UserFindManyArgs>,
  ) {
    return this.prismaService.user.findMany(findManyDto);
  }
  findAll() {
    return this.prismaService.user.findMany();
  }
  findFirst(findFirstDto: Prisma.UserFindFirstArgs) {
    return this.prismaService.user.findFirst(findFirstDto);
  }

  create(createUserDto: Prisma.UserCreateArgs) {
    return this.prismaService.user.create(createUserDto);
  }
  update(updateUserDto: Prisma.UserUpdateArgs) {
    return this.prismaService.user.update(updateUserDto);
  }
  delete(deleteDto: Prisma.UserDeleteArgs) {
    return this.prismaService.user.delete(deleteDto);
  }
}
