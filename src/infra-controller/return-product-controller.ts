import { ReturnProductUseCase } from "../use-cases/return-product"


export class ReturnProductController {
    private returnProductUseCase: ReturnProductUseCase

    constructor(returnProductUseCase: ReturnProductUseCase) {
        this.returnProductUseCase = returnProductUseCase
    }

    async execute(productType?: string) {
        try {
            const returnFunction = await this.returnProductUseCase.execute(productType);
            return { statusCode: 200, body: returnFunction }

        } catch (err) {
            return { statusCode: 400, body: (err as Error).message }
        }
    }
}