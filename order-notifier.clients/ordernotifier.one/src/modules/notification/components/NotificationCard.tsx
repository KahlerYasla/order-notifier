import { Notification } from "../types/notification"

interface NotificationCardProps {
    notification: Notification
    removeNotification: (id: string) => void
}

export const NotificationCard = ({
    notification,
    removeNotification,
}: NotificationCardProps) => {
    return (
        <div
            className={`border-l-4 p-4 ${notification.type === "error" ? "border-red-500" : "border-green-500"}`}
        >
            notification card tesrt
        </div>
    )
}
