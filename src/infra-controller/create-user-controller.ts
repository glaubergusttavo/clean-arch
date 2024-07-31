import { CreateUserProps, CreateUserUseCase } from "../use-cases/create-user";


export class CreateUserController {
    private createUserUseCase: CreateUserUseCase

    constructor(createUserUseCase: CreateUserUseCase) {
        this.createUserUseCase = createUserUseCase;
    }

    async execute(props: CreateUserProps) {

        try {
            await this.createUserUseCase.execute(props)
            return { statusCode: 200, body: "User created successfully!" }

        } catch (err) {
            return {
                statusCode: 400,
                body: (err as Error).message
            }
        }
    }
}