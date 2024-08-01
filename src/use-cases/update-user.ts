import { User } from "../entities/users";
import { UserRepository } from "../interfaces/user-repository";

export interface UpdateUserProps {
    name: string
    email: string
}

export class UpdateUserUseCase {
    private userRepository: UserRepository

    constructor(userRepository: UserRepository) {
        this.userRepository = userRepository
    }

    async execute(props: UpdateUserProps) {

        const userExist = await this.userRepository.findByEmail(props.email)

        if (!userExist) {
            throw new Error("User does not exists!")
        }

        userExist.updateEmail(props.email)
        userExist.updateName(props.name)

        await this.userRepository.update(userExist)
    }

}