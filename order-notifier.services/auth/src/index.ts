import express from "express"
import authRoutes from "./routes/auth.routes"
import dotenv from "dotenv"
import morgan from "morgan"
import logger from "./utils/logger.util"

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3001

// Middleware
app.use(express.json())

// Use Morgan with Winston as the stream
app.use(
    morgan("combined", {
        stream: {
            write: (message: string) => logger.info(message.trim()),
        },
    })
)

// Routes
app.use("/", authRoutes)

// Start server
app.listen(PORT, () => {
    console.log(`auth running on port ${PORT}`)
})
