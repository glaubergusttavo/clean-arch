import { ProductRepository } from "../interfaces/product-repository"

export interface UpdateProductProps{
     id: string
     price: number
}

export class UpdateProductUseCase{
    private productRepository: ProductRepository

    constructor(productRepository: ProductRepository){
        this.productRepository = productRepository
    }

    async execute(props: UpdateProductProps){

        const productExist = await this.productRepository.findByID(props.id)

        if(!productExist){
            throw new Error("Product does not exists!")
        }

        productExist.updatePrice(props.price)

        await this.productRepository.update(productExist);
    }
}