import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";

@Schema({ timestamps: true })
export class Book{
    @ApiProperty({
        description: 'The title of the book',
        example: 'The Great Gatsby',
      })
    @Prop()
    title: string;

    @ApiProperty({
        description: 'The description of the book',
        example: 'A classic novel about the American Dream',
      })
    @Prop()
    description: string;

    @ApiProperty({
        description: 'The author of the book',
        example: 'F. Scott Fitzgerald',
      })
    @Prop()
    author: string;

    @ApiProperty({
        description: 'The price of the book',
        example: 19.99,
      })
    @Prop()
    price: number;
}
export const BookSchema = SchemaFactory.createForClass(Book)