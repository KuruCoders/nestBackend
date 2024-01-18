import { IsOptional, IsString } from "class-validator";

export class UpdateBookDto {
  @IsOptional()
  @IsString()
  readonly title: string;

  @IsOptional()
  @IsString()
  readonly description: string;

  @IsOptional()
  @IsString()
  readonly price: number;

  @IsString()
  @IsOptional()
  readonly author: string;
}
