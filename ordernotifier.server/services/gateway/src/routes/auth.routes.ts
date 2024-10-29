import { Router } from "express"
import { createProxyMiddleware } from "http-proxy-middleware"

const router = Router()

router.use(
    "/auth",
    createProxyMiddleware({
        target: process.env.AUTH_SERVICE_URL || "http://auth:3000",
        changeOrigin: true,
    })
)

export default router
