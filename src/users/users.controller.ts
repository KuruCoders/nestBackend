import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './Dto/CreateUserDto';
import { UpdateUserDto } from './Dto/UpdateUserDto';

//the route handled is users
@Controller('users')
export class UsersController {

    //dependency injection using constructors
    constructor(private readonly userService:UsersService){}     

    /*
        GET /users
        GET /users/:id
        POST /users
        PATCH /user/:id
        DELETE /users/:id
    */
    @Get()
    findAll() {
        return this.userService.findAll()
    }
    //below is a method for query param
    //http://localhost:8000/users?role=Admin
    @Get()
    findQuery(@Query('role') role?: 'INTERN' | 'ADMIN') //?:specifies optional
    {
        return this.userService.findAll(role)
    }
    @Get(':id')
    findOne(@Param('id',ParseIntPipe) id: number) {
        return this.userService.findOne(id) // parseInt is a pipe in nest
    }
    @Post()
    create(@Body(ValidationPipe) createUserDto: CreateUserDto) {
        return this.userService.create(createUserDto)
    }
    @Patch(':id')
    update(@Param('id',ParseIntPipe) id: number,@Body(ValidationPipe) updateUserDto:UpdateUserDto) {
        return this.userService.update(id,updateUserDto) // parseInt is a pipe in nest can be use for validation req
    }
    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.userService.delete(+id) // +id is a unery converts string to number
    }
}
