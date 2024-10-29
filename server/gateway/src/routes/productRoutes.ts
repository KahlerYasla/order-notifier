// gateway/src/routes/productRoutes.ts
import express from "express"

// utils
import { forwardRequest } from "../utils/forwardRequest"

// middlewares
import { validateAuthToken } from "../middlewares/authMiddleware"

const router = express.Router()

// middleware to check authentication
router.use(validateAuthToken)

// GET /products - List all products
router.get("/", (req, res) => {
    forwardRequest(req, res, "http://product:3000/products")
})

// GET /products/:id - Get a specific product by ID
router.get("/:id", (req, res) => {
    forwardRequest(req, res, `http://product:3000/products/${req.params.id}`)
})

// POST /products - Create a new product
router.post("/", (req, res) => {
    forwardRequest(req, res, "http://product:3000/products")
})

// PUT /products/:id - Update a product by ID
router.put("/:id", (req, res) => {
    forwardRequest(req, res, `http://product:3000/products/${req.params.id}`)
})

// DELETE /products/:id - Delete a product by ID
router.delete("/:id", (req, res) => {
    forwardRequest(req, res, `http://product:3000/products/${req.params.id}`)
})

export default router
