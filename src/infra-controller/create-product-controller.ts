import { CreateProductProps, CreateProductUseCase } from "../use-cases/create-product";


export class CreateProductController{
    private createProductUseCase: CreateProductUseCase

    constructor(createProductUseCase: CreateProductUseCase){
        this.createProductUseCase = createProductUseCase
    }

    async execute(props: CreateProductProps){
        try{
             await this.createProductUseCase.execute(props)
             return {statusCode: 200}

        }catch(err){
            return{statusCode: 400, body: (err as Error).message}
        }
    }
}