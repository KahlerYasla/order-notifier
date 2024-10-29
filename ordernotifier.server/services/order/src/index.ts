import express from "express"
import orderRoutes from "./routes/order.routes"

const app = express()
const PORT = process.env.PORT || 3001 // Change port if needed

// Middleware
app.use(express.json())

// Routes
app.use("/api/orders", orderRoutes)

// Start server
app.listen(PORT, () => {
    console.log(`order running on port ${PORT}`)
})
