import { CartItem, CartModel } from "../models/cart"

export class CartRepo {
    private cartModel = new CartModel()

    async getCartByUserId(userId: number): Promise<CartItem[]> {
        return this.cartModel.getCartByUserId(userId)
    }

    async addItemToCart(cartItem: CartItem): Promise<CartItem> {
        return this.cartModel.addItemToCart(cartItem)
    }

    async updateCartItem(
        id: number,
        quantity: number
    ): Promise<CartItem | null> {
        return this.cartModel.updateCartItem(id, quantity)
    }

    async deleteCartItem(id: number): Promise<void> {
        return this.cartModel.deleteCartItem(id)
    }

    async clearCart(userId: number): Promise<void> {
        return this.cartModel.clearCart(userId)
    }
}
