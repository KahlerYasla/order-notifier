import { Request, Response } from "express"
import { OrderRepo } from "../repos/order.repo"
import { Order } from "../models/order"

const orderRepo = new OrderRepo()

export const getAllOrders = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const orders = await orderRepo.getAllOrders()
        res.status(200).json(orders)
    } catch (error) {
        console.error(error)
        res.status(500).send("Server Error")
    }
}

export const getOrderById = async (
    req: Request,
    res: Response
): Promise<void> => {
    const { id } = req.params
    try {
        const order = await orderRepo.getOrderById(parseInt(id))
        if (order) {
            res.status(200).json(order)
        } else {
            res.status(404).send("Order not found")
        }
    } catch (error) {
        console.error(error)
        res.status(500).send("Server Error")
    }
}

export const createOrder = async (
    req: Request,
    res: Response
): Promise<void> => {
    const newOrder: Order = req.body
    try {
        const createdOrder = await orderRepo.createOrder(newOrder)
        res.status(201).json(createdOrder)
    } catch (error) {
        console.error(error)
        res.status(500).send("Server Error")
    }
}

export const updateOrder = async (
    req: Request,
    res: Response
): Promise<void> => {
    const { id } = req.params
    const orderUpdates: Partial<Order> = req.body
    try {
        const updatedOrder = await orderRepo.updateOrder(
            parseInt(id),
            orderUpdates
        )
        if (updatedOrder) {
            res.status(200).json(updatedOrder)
        } else {
            res.status(404).send("Order not found")
        }
    } catch (error) {
        console.error(error)
        res.status(500).send("Server Error")
    }
}

export const deleteOrder = async (
    req: Request,
    res: Response
): Promise<void> => {
    const { id } = req.params
    try {
        await orderRepo.deleteOrder(parseInt(id))
        res.status(204).send()
    } catch (error) {
        console.error(error)
        res.status(500).send("Server Error")
    }
}
