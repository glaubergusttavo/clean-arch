import { User } from "../../../entities/users";
import { UserRepository } from "../../../interfaces/user-repository";
import { prisma } from "../../prisma";

export class PrismaUsersRepository implements UserRepository{
    async save(user: User) {
        await prisma.user.create({
            data: {
                name: user.getName,
                email: user.getEmail,
                password: user.getPassword
            }
        })
        
    }
    async getAll(){
        const dbUsers = await prisma.user.findMany();
        
        return dbUsers.map(user => {
            return new User({
                name: user.name,
                email: user.email,
                password: user.password
            })
        })
    }
}