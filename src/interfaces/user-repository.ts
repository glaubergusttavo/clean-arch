import { User } from "../entities/users"

export interface UserRepository{
    save(user: User): Promise<void>
    getAll(email?: string): Promise<User[]>
    findByEmail(email: string): Promise<User | undefined>
    update(user: User): Promise<void>
}