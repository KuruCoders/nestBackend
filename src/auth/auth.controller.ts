import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from './Dto/signup.dto';
import { LoginDto } from './Dto/login.dto';
import { ApiCreatedResponse } from '@nestjs/swagger';
/*
ApiCreatedResponse is for swager purpose
*/

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }
    
    @ApiCreatedResponse({
        description: 'User Created',
        type:SignUpDto
    })
    @Post('/signup')
    signUp(@Body() signUpDto: SignUpDto):Promise<SignUpDto> {
        return this.authService.signUp(signUpDto)
    }

    @ApiCreatedResponse({
        description: 'User logged In',
        type:LoginDto
    })
    @Post('/login')
    signIn(@Body() loginDto: LoginDto):Promise<any>{
        return this.authService.signIn(loginDto)
    }
}
