import { Injectable, UnauthorizedException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { PassportStrategy } from "@nestjs/passport";
import { Model } from "mongoose";
import { Strategy,ExtractJwt } from "passport-jwt";
import { User } from "./schema/user.schema";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class JwtStratergy extends PassportStrategy(Strategy) {
    constructor(
        @InjectModel(User.name)
        private userModel: Model<User>,
        config:ConfigService
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey:config.get<string>('SECRET'),
        })
    }
    async validate(payload) {
        const { id } = payload;
        const user = await this.userModel.findById(id)
        if (!user) throw new UnauthorizedException('login First')
        
        return user
    }
}