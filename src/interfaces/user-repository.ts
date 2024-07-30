import { User } from "../entities/users"

export interface UserRepository{
    save(user: User): Promise<void>
    getAll(): Promise<User[]>
}