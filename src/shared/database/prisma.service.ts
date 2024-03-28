import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  constructor() {
    super({
      log: [
        {
          emit: 'event',
          level: 'query',
        },
        'info',
        'warn',
        'error',
      ],
    });
    this.$on('query' as never, async (e: any) => {
      console.log({ query: e.query, params: e.params });
    });
  }

  async onModuleInit() {
    await this.$connect();
  }
}
