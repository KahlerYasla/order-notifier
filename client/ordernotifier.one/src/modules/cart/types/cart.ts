import { Product } from "../../product"

export type Cart = {
    userId: string
    items: Product[]
    total: number
    createdAt: Date
    updatedAt: Date
}
