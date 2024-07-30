import { Product } from "../entities/products";
import { ProductRepository } from "../interfaces/product-repository";

export interface CreateProductProps {
    type: string
    mark: string
    price: number
}

export class CreateProductUseCase {
    private productRepository: ProductRepository

    constructor(productRepository: ProductRepository) {
        this.productRepository = productRepository;
    }
    async execute(props: CreateProductProps) {

        const allProducts = await this.productRepository.getAll();

        const productAlreadyExists = allProducts.find(product => product.getType === props.type && product.getMark === props.mark && product.getPrice === props.price)
        if (productAlreadyExists) {
            throw new Error("Product aready exists!")
        }
        const product = new Product({
            type: props.type,
            mark: props.mark,
            price: props.price
        })

        await this.productRepository.save(product);
    }
}
