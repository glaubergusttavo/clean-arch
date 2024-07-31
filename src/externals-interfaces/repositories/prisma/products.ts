import { Product } from "../../../entities/products";
import { ProductRepository } from "../../../interfaces/product-repository";
import { prisma } from "../../prisma";


export class PrismaProductRepository implements ProductRepository {
    async save(product: Product) {
        await prisma.product.create({
            data: {
                type: product.getType,
                mark: product.getMark,
                price: product.getPrice
            }
        })
    }
    async getAll() {
        const dbProducts = await prisma.product.findMany();

       return dbProducts.map(product => {
            return new Product({
                type: product.type,
                mark: product.mark,
                price: product.price
            });
        })
    }
}