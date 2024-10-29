import pool from "../utils/db.client"

export interface Order {
    id?: number
    product_id: number
    quantity: number
    total_price: number
    status: string // e.g., 'pending', 'completed', 'cancelled'
    created_at?: Date
    updated_at?: Date
}

export class OrderModel {
    async getAllOrders(): Promise<Order[]> {
        const res = await pool.query("SELECT * FROM orders")
        return res.rows
    }

    async getOrderById(id: number): Promise<Order | null> {
        const res = await pool.query("SELECT * FROM orders WHERE id = $1", [id])
        return res.rows[0] || null
    }

    async createOrder(order: Order): Promise<Order> {
        const res = await pool.query(
            "INSERT INTO orders (product_id, quantity, total_price, status) VALUES ($1, $2, $3, $4) RETURNING *",
            [order.product_id, order.quantity, order.total_price, order.status]
        )
        return res.rows[0]
    }

    async updateOrder(
        id: number,
        order: Partial<Order>
    ): Promise<Order | null> {
        const setClause = Object.keys(order)
            .map((key, index) => `${key} = $${index + 2}`)
            .join(", ")
        const values = [id, ...Object.values(order)]
        const res = await pool.query(
            `UPDATE orders SET ${setClause} WHERE id = $1 RETURNING *`,
            values
        )
        return res.rows[0] || null
    }

    async deleteOrder(id: number): Promise<void> {
        await pool.query("DELETE FROM orders WHERE id = $1", [id])
    }
}
