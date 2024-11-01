import { Router } from "express"
import { createProxyMiddleware } from "http-proxy-middleware"

const router = Router()

router.use(
    "/order",
    createProxyMiddleware({
        target: process.env.ORDER_SERVICE_URL || "http://order:3000",
        changeOrigin: true,
    })
)

export default router
