import { ProductRepository } from "../interfaces/product-repository";


export class ReturnProductUseCase {
    private productRepository: ProductRepository

    constructor(productRepository: ProductRepository) {
        this.productRepository = productRepository;
    }

    async execute() {

        const allProducts = await this.productRepository.getAll();

        if (allProducts.length <= 0) {
            throw new Error("Products not found!")
        }
        return { products: allProducts };
    }
}
