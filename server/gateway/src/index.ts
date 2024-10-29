// gateway/src/index.ts
import express from "express"

// routes
import productRoutes from "./routes/product.routes"
import orderRoutes from "./routes/order.routes"
import authRoutes from "./routes/auth.routes"
import notificationRoutes from "./routes/notification.routes"
import cartRoutes from "./routes/cart.routes"

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())

// register routes
app.use("/product", productRoutes)
app.use("/order", orderRoutes)
app.use("/auth", authRoutes)
app.use("/notification", notificationRoutes)
app.use("/cart", cartRoutes)

app.listen(PORT, () => {
    console.log(`gateway is running on port ${PORT}`)
})
