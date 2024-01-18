import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schema/user.schema';
import { Model } from 'mongoose';
import * as bcrypt from 'bcryptjs'
import { SignUpDto } from './Dto/signup.dto';
import { LoginDto } from './Dto/login.dto';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
    constructor(
        @InjectModel(User.name)
        private userModel: Model<User>,
        private jwtService:JwtService
    ) { }
    
    async signUp(signUpDto:SignUpDto):Promise<SignUpDto> {
        const { name, email, password } = signUpDto
        const hashedPassword = await bcrypt.hash(password, 10)
        
        const user:SignUpDto = await this.userModel.create({
            name,email,password:hashedPassword
        })
        return user
    }
    async signIn(loginDto: LoginDto): Promise<any>{
        const { password, email } = loginDto

        const user = await this.userModel.findOne({email})
        if (!user) return new UnauthorizedException('Invalid Auth') 
        
        const isValidPassword = await bcrypt.compare(password, user.password)
        if (!isValidPassword) return new UnauthorizedException('Invalid Auth') 

        const token: string = this.jwtService.sign({ id: user._id })
        return {token}
    }
}
