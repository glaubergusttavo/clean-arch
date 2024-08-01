import { Product } from "../entities/products";

export interface ProductRepository{
    save(product: Product): Promise<void>;
    getAll(type?: string): Promise<Product[]>;
    findByID(id: string): Promise <Product | undefined>
    update(product: Product): Promise<void>;
}                                