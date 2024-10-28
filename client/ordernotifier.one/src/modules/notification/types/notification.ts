export type Notification = {
    id: string
    message: string
    type: "error" | "success"
    timestamp: Date
    read: boolean
}
