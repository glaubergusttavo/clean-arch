import { ReturnProductController } from "../../infra-controller/return-product-controller";
import { ReturnProductUseCase } from "../../use-cases/return-product";
import { PrismaProductRepository } from "../repositories/prisma/products"


export const makeReturnProductController = () =>{
    const productRepository = new PrismaProductRepository();
    const returnProductUseCase = new ReturnProductUseCase(productRepository);
    return new ReturnProductController(returnProductUseCase);
}