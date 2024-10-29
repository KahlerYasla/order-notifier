import pool from "../utils/db.client"

export interface CartItem {
    id?: number
    user_id: number
    product_id: number
    quantity: number
    created_at?: Date
}

export class CartModel {
    async getCartByUserId(userId: number): Promise<CartItem[]> {
        const res = await pool.query("SELECT * FROM cart WHERE user_id = $1", [
            userId,
        ])
        return res.rows
    }

    async addItemToCart(cartItem: CartItem): Promise<CartItem> {
        const res = await pool.query(
            "INSERT INTO cart (user_id, product_id, quantity) VALUES ($1, $2, $3) RETURNING *",
            [cartItem.user_id, cartItem.product_id, cartItem.quantity]
        )
        return res.rows[0]
    }

    async updateCartItem(
        id: number,
        quantity: number
    ): Promise<CartItem | null> {
        const res = await pool.query(
            "UPDATE cart SET quantity = $1 WHERE id = $2 RETURNING *",
            [quantity, id]
        )
        return res.rows[0] || null
    }

    async deleteCartItem(id: number): Promise<void> {
        await pool.query("DELETE FROM cart WHERE id = $1", [id])
    }

    async clearCart(userId: number): Promise<void> {
        await pool.query("DELETE FROM cart WHERE user_id = $1", [userId])
    }
}
