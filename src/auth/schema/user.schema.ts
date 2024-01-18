import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";

@Schema({ timestamps: true })
export class User{
    @ApiProperty({
        description: 'The name of the user',
        example: 'John Doe',
      })
    @Prop()
    name: string;

    @ApiProperty({
        description: 'The email address of the user',
        example: 'user@example.com',
      })
    @Prop()
    email: string;

    @ApiProperty({
        description: 'The password of the user',
        example: 'securePassword123',
      })
    @Prop()
    password: string;
}
export const UserSchema = SchemaFactory.createForClass(User)