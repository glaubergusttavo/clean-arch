import { ProductRepository } from "../interfaces/product-repository";


export class ReturnProductUseCase {
    private productRepository: ProductRepository

    constructor(productRepository: ProductRepository) {
        this.productRepository = productRepository;
    }

    async execute(productType? : string) {

        const allProducts = await this.productRepository.getAll(productType);

        if (allProducts.length <= 0) {
            throw new Error("Products not found!")
        }
        return { products: allProducts };
    }
}
