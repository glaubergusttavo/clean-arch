import { ReturnUserUseCase } from "../use-cases/return-user";

export class ReturnUserController {
    private returnUserUseCase: ReturnUserUseCase

    constructor(returnUserUseCase: ReturnUserUseCase) {
        this.returnUserUseCase = returnUserUseCase;
    }

    async execute() {

        try {
            const returnFunction = await this.returnUserUseCase.execute()
            return { statusCode: 200, body: returnFunction }

        } catch (err) {
            return { statusCode: 400, body: (err as Error).message }
        }

    }
}