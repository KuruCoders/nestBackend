import { Injectable } from '@nestjs/common';

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
            return this.users.filter(user => {
                return user.role===role
            })
        }
        return this.users
    }
    findOne(id: number) {
        const users = this.users.find(user => {
            return user.id===id
        })
        return users
    }
    create(user: { name: string, email: string, role: 'INTERN' | 'ADMIN' }) {
        const usersByHighestId = [...this.users].sort((a, b) => {
            return b.id - a.id
        })
        const newUser = {
            id: usersByHighestId[0].id + 1,
            ...user
        }
        this.users.push(newUser)
        return newUser
    }
    update(id: number, updateUser: { name?: string, email?: string, role?: 'INTERN' | 'ADMIN' }) {
        this.users = this.users.map(user => {
            if (user.id === id) {
                return{...user,...updateUser}
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
