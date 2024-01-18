import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './Dto/CreateUserDto';
import { UpdateUserDto } from './Dto/UpdateUserDto';

@Injectable()
export class UsersService {
    private users = [
        {
            "id": 1,
            "name": "Lenne",
            "email": "lenne@gmail.com",
            "role": "INTERN"
        },
        {
            "id": 2,
            "name": "Elena",
            "email": "elena@gmail.com",
            "role": "INTERN"
        },
        {
            "id": 3,
            "name": "Alex",
            "email": "alex@gmail.com",
            "role": "INTERN"
        },
        {
            "id": 4,
            "name": "Samuel",
            "email": "samuel@gmail.com",
            "role": "INTERN"
        },
        {
            "id": 5,
            "name": "Sophie",
            "email": "sophie@gmail.com",
            "role": "INTERN"
        }
    ];

    findAll(role?: 'INTERN' | 'ADMIN') {
        if (role) {
            const rolesArray = this.users.filter(user => {
                return user.role===role
            })
            if (rolesArray.length === 0) 
                throw new NotFoundException('User Role Not Found')
        }
        return this.users
    }
    findOne(id: number) {
        const users = this.users.find(user => {
            return user.id===id
        })
        if(!users) throw new NotFoundException('User Not Found')
        return users
    }
    create(createUserDto:CreateUserDto) {
        const usersByHighestId = [...this.users].sort((a, b) => {
            return b.id - a.id
        })
        const newUser = {
            id: usersByHighestId[0].id + 1,
            ...createUserDto
        }
        this.users.push(newUser)
        return newUser
    }
    update(id: number, updateUserDto: UpdateUserDto) {
        this.users = this.users.map(user => {
            if (user.id === id) {
                return{...user,...updateUserDto}
            }
            return user
        })
        return this.findOne(id)
    }
    delete(id: number) {
        const removedUser = this.findOne(id)
        this.users = this.users.filter(user => user.id !== id)
        return removedUser
    }
}
