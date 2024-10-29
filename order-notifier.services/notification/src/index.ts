import express from "express"
import notificationRoutes from "./routes/notification.routes"

const app = express()
const PORT = process.env.PORT || 3004 // Change port if needed

// Middleware
app.use(express.json())

// Routes
app.use("/", notificationRoutes)

// Start server
app.listen(PORT, () => {
    console.log(`notification running on port ${PORT}`)
})
