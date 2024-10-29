import { Product, ProductModel } from "../models/product"

export class ProductRepo {
    private productModel = new ProductModel()

    async getAllProducts(): Promise<Product[]> {
        return this.productModel.getAllProducts()
    }

    async getProductById(id: number): Promise<Product | null> {
        return this.productModel.getProductById(id)
    }

    async createProduct(product: Product): Promise<Product> {
        return this.productModel.createProduct(product)
    }

    async updateProduct(
        id: number,
        product: Partial<Product>
    ): Promise<Product | null> {
        return this.productModel.updateProduct(id, product)
    }

    async deleteProduct(id: number): Promise<void> {
        return this.productModel.deleteProduct(id)
    }
}
