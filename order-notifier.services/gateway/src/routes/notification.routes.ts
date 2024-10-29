import { Router } from "express"
import { createProxyMiddleware } from "http-proxy-middleware"

const router = Router()

router.use(
    "/notification",
    createProxyMiddleware({
        target:
            process.env.NOTIFICATION_SERVICE_URL || "http://notification:3000",
        changeOrigin: true,
    })
)

export default router
