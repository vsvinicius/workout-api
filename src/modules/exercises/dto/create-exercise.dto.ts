import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateExerciseDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  reps: string;

  @IsString()
  @IsNotEmpty()
  sets: string;

  @IsUUID()
  @IsNotEmpty()
  workoutId: string;
}
