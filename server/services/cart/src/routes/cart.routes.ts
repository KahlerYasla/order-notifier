import { Router } from "express"
import {
    getCartByUserId,
    addItemToCart,
    updateCartItem,
    deleteCartItem,
    clearCart,
} from "../handlers/cart.handler"

const router = Router()

router.get("/:userId", getCartByUserId)
router.post("/", addItemToCart)
router.put("/:id", updateCartItem)
router.delete("/:id", deleteCartItem)
router.delete("/clear/:userId", clearCart)

export default router
