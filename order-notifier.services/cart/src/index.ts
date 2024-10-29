import express from "express"
import cartRoutes from "./routes/cart.routes"

const app = express()
const PORT = process.env.PORT || 3002 // Use a different port if needed

// Middleware
app.use(express.json())

// Routes
app.use("/", cartRoutes)

// Start server
app.listen(PORT, () => {
    console.log(`cart running on port ${PORT}`)
})
