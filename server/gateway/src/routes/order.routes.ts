import { Router } from "express"
import { createProxyMiddleware } from "http-proxy-middleware"

const router = Router()

router.use(
    "/orders",
    createProxyMiddleware({
        target: process.env.ORDER_SERVICE_URL || "http://order_service:3000",
        changeOrigin: true,
    })
)

export default router
