import { Router } from "express"
import { createProxyMiddleware } from "http-proxy-middleware"

const router = Router()

router.use(
    "/cart",
    createProxyMiddleware({
        target: process.env.CART_SERVICE_URL || "http://cart:3000",
        changeOrigin: true,
    })
)

export default router
