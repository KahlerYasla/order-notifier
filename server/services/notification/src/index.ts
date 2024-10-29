import express from "express"
import notificationRoutes from "./routes/notification.routes"

const app = express()
const PORT = process.env.PORT || 3002 // Change port if needed

// Middleware
app.use(express.json())

// Routes
app.use("/api/notifications", notificationRoutes)

// Start server
app.listen(PORT, () => {
    console.log(`Notification service running on port ${PORT}`)
})
