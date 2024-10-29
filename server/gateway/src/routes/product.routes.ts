import { Router } from "express"
import { createProxyMiddleware } from "http-proxy-middleware"

const router = Router()

router.use(
    "/products",
    createProxyMiddleware({
        target:
            process.env.PRODUCT_SERVICE_URL || "http://product_service:3000",
        changeOrigin: true,
    })
)

export default router
