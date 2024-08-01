import { UserRepository } from "../interfaces/user-repository";


export class ReturnUserUseCase {
    private userRepository: UserRepository

    constructor(userRepository: UserRepository) {
        this.userRepository = userRepository;
    }

    async execute(userEmail?: string) {

        const allUsers = await this.userRepository.getAll(userEmail);

        if (allUsers.length <= 0) {
            throw new Error("Users not found!")
        }
        return { users: allUsers };
    }

}