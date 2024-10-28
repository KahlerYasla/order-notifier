export type Order = {
    id: string
    customerId: string
    items: Array<{
        productId: string
        quantity: number
    }>
    totalAmount: number
    status: "pending" | "shipped" | "delivered" | "cancelled"
    createdAt: Date
    updatedAt: Date
}
