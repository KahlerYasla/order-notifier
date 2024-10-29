import { Server } from "socket.io"
import http from "http"

export const initializeSocket = (httpServer: http.Server) => {
    const io = new Server(httpServer)

    io.on("connection", (socket) => {
        console.log("A user connected:", socket.id)
    })

    return io
}
