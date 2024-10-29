import pool from "../utils/db.client"

export interface Notification {
    id?: number
    user_id: number
    message: string
    status: string // e.g., 'sent', 'pending', 'failed'
    created_at?: Date
}

export class NotificationModel {
    async getAllNotifications(): Promise<Notification[]> {
        const res = await pool.query("SELECT * FROM notifications")
        return res.rows
    }

    async getNotificationById(id: number): Promise<Notification | null> {
        const res = await pool.query(
            "SELECT * FROM notifications WHERE id = $1",
            [id]
        )
        return res.rows[0] || null
    }

    async createNotification(
        notification: Notification
    ): Promise<Notification> {
        const res = await pool.query(
            "INSERT INTO notifications (user_id, message, status) VALUES ($1, $2, $3) RETURNING *",
            [notification.user_id, notification.message, notification.status]
        )
        return res.rows[0]
    }

    async updateNotification(
        id: number,
        notification: Partial<Notification>
    ): Promise<Notification | null> {
        const setClause = Object.keys(notification)
            .map((key, index) => `${key} = $${index + 2}`)
            .join(", ")
        const values = [id, ...Object.values(notification)]
        const res = await pool.query(
            `UPDATE notifications SET ${setClause} WHERE id = $1 RETURNING *`,
            values
        )
        return res.rows[0] || null
    }

    async deleteNotification(id: number): Promise<void> {
        await pool.query("DELETE FROM notifications WHERE id = $1", [id])
    }
}
