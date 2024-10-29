import { Router } from "express"
import {
    getAllOrders,
    getOrderById,
    createOrder,
    updateOrder,
    deleteOrder,
} from "../handlers/order.handler"

const router = Router()

router.get("/ping", (req, res) => {
    res.send("pong")
})
router.get("/", getAllOrders)
router.get("/:id", getOrderById)
router.post("/", createOrder)
router.put("/:id", updateOrder)
router.delete("/:id", deleteOrder)

export default router
