import express from "express"
import dotenv from "dotenv"
import cors from "cors" // Import the cors package

import authRoutes from "./routes/auth.routes"
import orderRoutes from "./routes/order.routes"
import notificationRoutes from "./routes/notification.routes"
import cartRoutes from "./routes/cart.routes"
import productRoutes from "./routes/product.routes"

import morgan from "morgan"
import logger from "./utils/logger.util"

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

// Enable CORS for all routes
app.use(cors()) // Use the CORS middleware

// Middleware to parse JSON bodies
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
app.use("/api", authRoutes)
app.use("/api", orderRoutes)
app.use("/api", notificationRoutes)
app.use("/api", cartRoutes)
app.use("/api", productRoutes)

// CORS options
const corsOptions = {
    origin: "http://localhost:3000", // Allow the React app to connect to the server
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE", // Allowed methods
    credentials: true, // Allow credentials (cookies, authorization headers, etc.)
    optionsSuccessStatus: 204, // Some legacy browsers (IE11, various SmartTVs) choke on 204
}

// Enable CORS with options
app.use(cors(corsOptions))

// Start the server
app.listen(PORT, () => {
    console.log(`gateway running on port ${PORT}`)
})
