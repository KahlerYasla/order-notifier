// gateway/src/index.ts
import express from "express"

// routes
import productRoutes from "./routes/productRoutes"
import orderRoutes from "./routes/orderRoutes"
import authRoutes from "./routes/authRoutes"
import notificationRoutes from "./routes/notificationRoutes"
import cartRoutes from "./routes/cartRoutes"

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
