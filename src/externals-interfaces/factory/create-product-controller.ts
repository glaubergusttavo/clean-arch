import { CreateProductController } from "../../infra-controller/create-product-controller";
import { CreateProductUseCase } from "../../use-cases/create-product";
import { PrismaProductRepository } from "../repositories/prisma/products"


export const makeCreateProductController = () =>{
    const productRepository = new PrismaProductRepository();
    const createProductUseCase = new CreateProductUseCase(productRepository);
    return new CreateProductController(createProductUseCase);
}