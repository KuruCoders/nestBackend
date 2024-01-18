import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class LoginDto {
  @IsString()
  @IsNotEmpty()
  readonly password: string;

  @IsString()
  @IsEmail()
  @IsNotEmpty()
  readonly email: string;
}
