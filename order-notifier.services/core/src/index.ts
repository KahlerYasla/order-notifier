// src/server.ts
import express from "express"
import path from "path"

const app = express()
const PORT = process.env.PORT || 3003

// Middleware to serve static files
app.use(express.static(path.join(__dirname, "protos")))

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})
