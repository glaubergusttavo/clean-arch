import { UpdateProductController } from "../../infra-controller/update-product-controller";
import { UpdateProductUseCase } from "../../use-cases/update-product";
import { PrismaProductRepository } from "../repositories/prisma/products"

export const makeUpdateProductController = () =>{
    const productRepository = new PrismaProductRepository();
    const updateProductUseCase = new UpdateProductUseCase(productRepository);
    return new UpdateProductController(updateProductUseCase);
}