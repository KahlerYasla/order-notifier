import { create } from "zustand"
import axios from "axios"

// types
import { Cart } from "../types/cart"

// stores
import { useUserStore } from "../../auth"

interface CartStore {
    userId: string
    cart: Cart
    getCart: (userId: string) => void
    addToCart: (product: any) => void
    removeFromCart: (product: any) => void
    clearCart: () => void
}

export const useCartStore = create<CartStore>((set, get) => ({
    userId: useUserStore.getState().user.id,
    cart: {
        userId: "",
        productIds: [],
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    getCart: async (userId) => {
        try {
            const response = await axios.get<Cart>(`/api/cart/${userId}`)
            set({ cart: response.data })
        } catch (error) {
            console.error(error)
        }
    },
    addToCart: async (product) => {
        try {
            const response = await axios.post<Cart>("/api/cart/add", {
                userId: get().userId,
                productIds: [product.id],
            })
            set({ cart: response.data })
        } catch (error) {
            console.error(error)
        }
    },
    removeFromCart: async (product) => {
        try {
            const response = await axios.post<Cart>("/api/cart/remove", {
                userId: get().userId,
                productIds: [product.id],
            })
            set({ cart: response.data })
        } catch (error) {
            console.error(error)
        }
    },
    clearCart: async () => {
        try {
            const response = await axios.post<Cart>("/api/cart/clear", {
                userId: get().userId,
            })
            set({ cart: response.data })
        } catch (error) {
            console.error(error)
        }
    },
}))
