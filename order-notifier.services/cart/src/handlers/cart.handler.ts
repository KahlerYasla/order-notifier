import { Request, Response } from "express"
import { CartRepo } from "../repos/cart.repo"
import { CartItem } from "../models/cart"

const cartRepo = new CartRepo()

export const getCartByUserId = async (
    req: Request,
    res: Response
): Promise<void> => {
    const userId = parseInt(req.params.userId)
    try {
        const cart = await cartRepo.getCartByUserId(userId)
        res.status(200).json(cart)
    } catch (error) {
        console.error(error)
        res.status(500).send("Server Error")
    }
}

export const addItemToCart = async (
    req: Request,
    res: Response
): Promise<void> => {
    const cartItem: CartItem = req.body
    try {
        const addedItem = await cartRepo.addItemToCart(cartItem)
        res.status(201).json(addedItem)
    } catch (error) {
        console.error(error)
        res.status(500).send("Server Error")
    }
}

export const updateCartItem = async (
    req: Request,
    res: Response
): Promise<void> => {
    const { id } = req.params
    const { quantity } = req.body
    try {
        const updatedItem = await cartRepo.updateCartItem(
            parseInt(id),
            quantity
        )
        if (updatedItem) {
            res.status(200).json(updatedItem)
        } else {
            res.status(404).send("Cart item not found")
        }
    } catch (error) {
        console.error(error)
        res.status(500).send("Server Error")
    }
}

export const deleteCartItem = async (
    req: Request,
    res: Response
): Promise<void> => {
    const { id } = req.params
    try {
        await cartRepo.deleteCartItem(parseInt(id))
        res.status(204).send()
    } catch (error) {
        console.error(error)
        res.status(500).send("Server Error")
    }
}

export const clearCart = async (req: Request, res: Response): Promise<void> => {
    const userId = parseInt(req.params.userId)
    try {
        await cartRepo.clearCart(userId)
        res.status(204).send()
    } catch (error) {
        console.error(error)
        res.status(500).send("Server Error")
    }
}
