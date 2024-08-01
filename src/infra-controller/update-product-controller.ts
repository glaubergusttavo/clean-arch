import { UpdateProductProps, UpdateProductUseCase } from "../use-cases/update-product";


export class UpdateProductController{
    private updateProductUseCase: UpdateProductUseCase

    constructor(updateProductUseCase: UpdateProductUseCase){
        this.updateProductUseCase = updateProductUseCase
    }

    async execute(props: UpdateProductProps){

        try{
            await this.updateProductUseCase.execute(props)
            return{
                statusCode: 200,
                body: {message: "Product updated successfully!"}
            }

        }catch(err){
            return{
                statusCode: 400,
                body: {message: (err as Error).message}
            }
        }
    }
}