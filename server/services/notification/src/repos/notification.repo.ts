import { Notification, NotificationModel } from "../models/notification"

export class NotificationRepo {
    private notificationModel = new NotificationModel()

    async getAllNotifications(): Promise<Notification[]> {
        return this.notificationModel.getAllNotifications()
    }

    async getNotificationById(id: number): Promise<Notification | null> {
        return this.notificationModel.getNotificationById(id)
    }

    async createNotification(
        notification: Notification
    ): Promise<Notification> {
        return this.notificationModel.createNotification(notification)
    }

    async updateNotification(
        id: number,
        notification: Partial<Notification>
    ): Promise<Notification | null> {
        return this.notificationModel.updateNotification(id, notification)
    }

    async deleteNotification(id: number): Promise<void> {
        return this.notificationModel.deleteNotification(id)
    }
}
