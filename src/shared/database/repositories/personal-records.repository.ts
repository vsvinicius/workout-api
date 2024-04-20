import { Injectable } from '@nestjs/common';
import { type Prisma } from 'prisma/prisma-client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PersonalRecordsRepository {
  constructor(private readonly prismaService: PrismaService) {}

  findMany<T extends Prisma.PersonalRecordFindManyArgs>(
    findManyDto: Prisma.SelectSubset<T, Prisma.PersonalRecordFindManyArgs>,
  ) {
    return this.prismaService.personalRecord.findMany(findManyDto);
  }

  findFirst(findFirstDto: Prisma.PersonalRecordFindFirstArgs) {
    return this.prismaService.personalRecord.findFirst(findFirstDto);
  }

  create(createPersonalRecordDto: Prisma.PersonalRecordCreateArgs) {
    return this.prismaService.personalRecord.create(createPersonalRecordDto);
  }
  update(updatePersonalRecordDto: Prisma.PersonalRecordUpdateArgs) {
    return this.prismaService.personalRecord.update(updatePersonalRecordDto);
  }
  delete(deleteDto: Prisma.PersonalRecordDeleteArgs) {
    return this.prismaService.personalRecord.delete(deleteDto);
  }
}
