import express from "express"
import cartRoutes from "./routes/cart.routes"

const app = express()
const PORT = process.env.PORT || 3003 // Use a different port if needed

// Middleware
app.use(express.json())

// Routes
app.use("/api/cart", cartRoutes)

// Start server
app.listen(PORT, () => {
    console.log(`Cart service running on port ${PORT}`)
})
