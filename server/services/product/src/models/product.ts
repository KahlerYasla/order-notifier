import pool from "../utils/db.client"

export interface Product {
    id?: number
    name: string
    description: string
    price: number
    stock: number
    created_at?: Date
    updated_at?: Date
}

export class ProductModel {
    async getAllProducts(): Promise<Product[]> {
        const res = await pool.query("SELECT * FROM products")
        return res.rows
    }

    async getProductById(id: number): Promise<Product | null> {
        const res = await pool.query("SELECT * FROM products WHERE id = $1", [
            id,
        ])
        return res.rows[0] || null
    }

    async createProduct(product: Product): Promise<Product> {
        const res = await pool.query(
            "INSERT INTO products (name, description, price, stock) VALUES ($1, $2, $3, $4) RETURNING *",
            [product.name, product.description, product.price, product.stock]
        )
        return res.rows[0]
    }

    async updateProduct(
        id: number,
        product: Partial<Product>
    ): Promise<Product | null> {
        const setClause = Object.keys(product)
            .map((key, index) => `${key} = $${index + 2}`)
            .join(", ")
        const values = [id, ...Object.values(product)]
        const res = await pool.query(
            `UPDATE products SET ${setClause} WHERE id = $1 RETURNING *`,
            values
        )
        return res.rows[0] || null
    }

    async deleteProduct(id: number): Promise<void> {
        await pool.query("DELETE FROM products WHERE id = $1", [id])
    }
}
