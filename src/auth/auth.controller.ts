import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from './Dto/signup.dto';
import { LoginDto } from './Dto/login.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }
    
    @Post('/signup')
    signUp(@Body() signUpDto: SignUpDto):Promise<SignUpDto> {
        return this.authService.signUp(signUpDto)
    }

    @Post('/login')
    signIn(@Body() loginDto: LoginDto):Promise<any>{
        return this.authService.signIn(loginDto)
    }
}
