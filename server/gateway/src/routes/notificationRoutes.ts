// Example: src/routes/notifications.ts
import express from "express"
import redis from "../utils/redisClient"

const router = express.Router()

router.post("/order", async (req, res) => {
    const { orderNumber, productName, userName } = req.body

    // Create notification message
    const notification = {
        orderNumber,
        productName,
        userName,
        timestamp: new Date().toISOString(),
    }

    // Cache the notification in Redis
    await redis.lpush("notifications", JSON.stringify(notification))

    // Optionally set an expiration time for the cached notifications
    // e.g., expire notifications after 1 hour
    await redis.expire("notifications", 3600)

    // Respond back
    res.status(200).json({ message: "Notification cached successfully!" })
})

// Retrieve notifications
router.get("/notifications", async (req, res) => {
    const notifications = await redis.lrange("notifications", 0, -1)

    res.status(200).json(notifications.map((notif) => JSON.parse(notif)))
})

export default router
