import { plainToInstance } from 'class-transformer';
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  validateSync,
} from 'class-validator';

class Env {
  @IsString()
  @IsNotEmpty()
  dbUrl: string;

  @IsNumber()
  @IsOptional()
  port: number;
}

export const env: Env = plainToInstance(Env, {
  port: parseInt(process.env.PORT, 10) || 3000,
  dbUrl: process.env.POSTGRES_PRISMA_URL,
});

const errors = validateSync(env);

if (errors.length) {
  throw new Error(JSON.stringify(errors, null, 2));
}
