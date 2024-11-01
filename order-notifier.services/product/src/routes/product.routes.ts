import { Router } from "express"
import {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
} from "../handlers/product.handler"

const router = Router()

router.get("/ping", (req, res) => {
    res.send("pong")
})
router.get("/", getAllProducts)
router.get("/:id", getProductById)
router.post("/", createProduct)
router.put("/:id", updateProduct)
router.delete("/:id", deleteProduct)

export default router
