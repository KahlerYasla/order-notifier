import { Order, OrderModel } from "../models/order"

export class OrderRepo {
    private orderModel = new OrderModel()

    async getAllOrders(): Promise<Order[]> {
        return this.orderModel.getAllOrders()
    }

    async getOrderById(id: number): Promise<Order | null> {
        return this.orderModel.getOrderById(id)
    }

    async createOrder(order: Order): Promise<Order> {
        return this.orderModel.createOrder(order)
    }

    async updateOrder(
        id: number,
        order: Partial<Order>
    ): Promise<Order | null> {
        return this.orderModel.updateOrder(id, order)
    }

    async deleteOrder(id: number): Promise<void> {
        return this.orderModel.deleteOrder(id)
    }
}
