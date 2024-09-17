import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { CreateUserInputType } from './users.types';

export class CreateUserInput implements CreateUserInputType {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  password: string;
}
