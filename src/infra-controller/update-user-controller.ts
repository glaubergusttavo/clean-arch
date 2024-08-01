import { UpdateUserProps, UpdateUserUseCase } from "../use-cases/update-user";

export class UpdateUserController {
    private updateUserUseCase: UpdateUserUseCase

    constructor(updateUserUseCase: UpdateUserUseCase) {
        this.updateUserUseCase = updateUserUseCase;
    }

    async execute(props: UpdateUserProps) {

        try {
            await this.updateUserUseCase.execute(props);

            return {
                statusCode: 200,
                body: { message: "User updated successfully!" }
            }

        } catch (err){ 
            return {
                statusCode: 400,
                body: { message: (err as Error).message }
            }
        }
    }
}
