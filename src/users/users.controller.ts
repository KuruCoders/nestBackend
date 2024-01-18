import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';

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
    findOne(@Param('id') id: string) {
        return this.userService.findOne(+id) // +id is a unery converts string to number
    }
    @Post()
    create(@Body() user: { name: string, email: string, role: 'INTERN' | 'ADMIN' }) {
        return this.userService.create(user)
    }
    @Patch(':id')
    update(@Param('id') id: string,@Body() userUpdate:{ name: string, email: string, role: 'INTERN' | 'ADMIN' }) {
        return this.userService.update(+id,userUpdate)// +id is a unery converts string to number
    }
    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.userService.delete(+id) // +id is a unery converts string to number
    }
}
