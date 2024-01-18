import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class SignUpDto {
  @ApiProperty({
    description: 'The name of the user',
    example: 'John Doe',
  })
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @ApiProperty({
    description: 'The email address for registration',
    example: 'user@example.com',
  })
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  readonly email: string;

  @ApiProperty({
    description:'The Password Address For registration',
    example:'Bllo12345'
  })
  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  readonly password: string;
}
