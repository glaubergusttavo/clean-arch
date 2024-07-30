import { User } from "../entities/users";
import { UserRepository } from "../interfaces/user-repository";

export interface CreateUserProps {
    name: string
    email: string
    password: string
}

export class CreateUserUseCase {
    private userRepository: UserRepository

    constructor(userRepository: UserRepository) {
        this.userRepository = userRepository;
    }
    
    async execute(props: CreateUserProps){

        const allUsers = await this.userRepository.getAll();

        const emailAlreadyExists = allUsers.find(user => user.getEmail === props.email)
        if(emailAlreadyExists){
            throw new Error("User aready exists!")
        }
        const user = new User({
          name: props.name,
          email: props.email,
          password: props.password
        })

        await this.userRepository.save(user);
    }

}