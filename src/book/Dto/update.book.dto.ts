import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";

export class UpdateBookDto {
  @ApiProperty({
    description: 'The title of the book (optional)',
    example: 'Updated Title',
  })
  @IsOptional()
  @IsString()
  readonly title: string;

  @ApiProperty({
    description: 'The description of the book (optional)',
    example: 'Updated description',
  })
  @IsOptional()
  @IsString()
  readonly description: string;

  @ApiProperty({
    description: 'The price of the book (optional)',
    example: 29.99,
  })
  @IsOptional()
  @IsString()
  readonly price: number;

  @ApiProperty({
    description: 'The author of the book (optional)',
    example: 'John Doe',
  })
  @IsString()
  @IsOptional()
  readonly author: string;
}
