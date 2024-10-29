import { NotificationCard } from "../components/NotificationCard"
import { Notification } from "../types/notification"

interface NotificationContainerProps {
    notifications: Notification[]
    removeNotification: (id: string) => void
}

export const NotificationContainer = ({
    notifications,
    removeNotification,
}: NotificationContainerProps) => {
    return (
        <div className="fixed right-0 top-0 p-4">
            {notifications.map((notification: Notification) => (
                <NotificationCard
                    key={notification.id}
                    notification={notification}
                    removeNotification={removeNotification}
                />
            ))}
        </div>
    )
}
