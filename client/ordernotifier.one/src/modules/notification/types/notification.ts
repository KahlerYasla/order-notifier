export type Notification = {
    id: string
    orderId: string
    isRead: boolean
    message: string
    type: "error" | "success"
    timestamp: Date
}
