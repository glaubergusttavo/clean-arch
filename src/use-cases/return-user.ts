import { User } from "../entities/users";
import { UserRepository } from "../interfaces/user-repository";


export class ReturnUserUseCase {
    private userRepository: UserRepository

    constructor(userRepository: UserRepository) {
        this.userRepository = userRepository;
    }
    
    async execute(){

        const allUsers = await this.userRepository.getAll();

        if(allUsers.length <= 0){
            throw new Error("User not found!")
        }
        return {users: allUsers};
    }

}