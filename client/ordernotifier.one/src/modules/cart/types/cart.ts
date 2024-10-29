import { Product } from "../../product"

export type Cart = {
    userId: string
    productIds: string[]
    createdAt: Date
    updatedAt: Date
}
