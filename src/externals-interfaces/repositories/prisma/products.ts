import { Product } from "../../../entities/products";
import { ProductRepository } from "../../../interfaces/product-repository";
import { prisma } from "../../prisma";


export class PrismaProductRepository implements ProductRepository {
    async save(product: Product) {
        await prisma.product.create({
            data: {
                id: product.getID,
                type: product.getType,
                mark: product.getMark,
                price: product.getPrice
            }
        })
    }
    async getAll(productType?: string) {
        const dbProducts = await prisma.product.findMany({
            where: {
                type: {
                    startsWith: productType
                }
            }
        });

       return dbProducts.map(product => {
            return new Product({
                id: product.id,
                type: product.type,
                mark: product.mark,
                price: product.price
            });
        })
    }

    async findByID(id: string) {

        const productID = await prisma.product.findFirst({
            where: {id: id}
        })
            
        if (productID) {
            return new Product({
                id: productID.id,
                type: productID.type,
                mark: productID.mark,
                price: productID.price
            })
        }

        return undefined;
    }

    async update(product: Product) {
        await prisma.product.update({
           
            where: {
                id: product.getID
            },
            data: {
                id: product.getID,
                price: product.getPrice
            }
        })

    }
}