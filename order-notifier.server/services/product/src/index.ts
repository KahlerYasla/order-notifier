import express from "express"
import productRoutes from "./routes/product.routes"

const app = express()
const PORT = process.env.PORT || 3000

// Middleware
app.use(express.json())

// Routes
app.use("/", productRoutes)

// Start server
app.listen(PORT, () => {
    console.log(`product running on port ${PORT}`)
})
