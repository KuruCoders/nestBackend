import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateBookDto {
  @IsNotEmpty()
  @IsString()
  readonly title: string;

  @IsString()
  @IsNotEmpty()
  readonly description: string;

  @IsNumber()
  @IsNotEmpty()
  readonly price: number;

  @IsNotEmpty()
  @IsString()
  readonly author: string;
}
