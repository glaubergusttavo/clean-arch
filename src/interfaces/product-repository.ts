import { Product } from "../entities/products";

export interface ProductRepository{
    save(product: Product): Promise<void>;
    getAll(): Promise<Product[]>;
}