import express from "express"
import dotenv from "dotenv"

import authRoutes from "./routes/auth.routes"
import orderRoutes from "./routes/order.routes"
import notificationRoutes from "./routes/notification.routes"
import cartRoutes from "./routes/cart.routes"
import productRoutes from "./routes/product.routes"

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

// middleware
app.use(express.json())

// routes
app.use("/api", authRoutes)
app.use("/api", orderRoutes)
app.use("/api", notificationRoutes)
app.use("/api", cartRoutes)
app.use("/api", productRoutes)

app.listen(PORT, () => {
    console.log(`Gateway service running on port ${PORT}`)
})
