import { User } from "../../../entities/users";
import { UserRepository } from "../../../interfaces/user-repository";
import { prisma } from "../../prisma";

export class PrismaUsersRepository implements UserRepository {
    async save(user: User) {
        await prisma.user.create({
            data: {
                name: user.getName,
                email: user.getEmail,
                password: user.getPassword
            }
        })

    }
    async getAll(userEmail?: string) {
        const dbUsers = await prisma.user.findMany({
            where: {
                email: {
                    startsWith: userEmail
                }
            }
        });


        return dbUsers.map(user => {
            return new User({
                name: user.name,
                email: user.email,
                password: user.password
            })
        })
    }

    async findByEmail(email: string) {

        const userEmail = await prisma.user.findFirst({
            where: {email: email}
        })
            
        if (userEmail) {
            return new User({
                name: userEmail.name,
                email: userEmail.email,
                password: userEmail.password
            })
        }

        return undefined;
    }

    async update(user: User) {
        await prisma.user.update({

            where: {
                email: user.getEmail
            },

            data: {
                email: user.getEmail,
                name: user.getName
            }
        })

    }
}