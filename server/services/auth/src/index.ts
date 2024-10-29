import express from "express"
import authRoutes from "./routes/auth.routes"
import dotenv from "dotenv"

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3001

// Middleware
app.use(express.json())

// Routes
app.use("/api/auth", authRoutes)

// Start server
app.listen(PORT, () => {
    console.log(`Auth service running on port ${PORT}`)
})
