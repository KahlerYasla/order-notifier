import { Request, Response } from "express"
import { NotificationRepo } from "../repos/notification.repo"
import { Notification } from "../models/notification"

const notificationRepo = new NotificationRepo()

export const getAllNotifications = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const notifications = await notificationRepo.getAllNotifications()
        res.status(200).json(notifications)
    } catch (error) {
        console.error(error)
        res.status(500).send("Server Error")
    }
}

export const getNotificationById = async (
    req: Request,
    res: Response
): Promise<void> => {
    const { id } = req.params
    try {
        const notification = await notificationRepo.getNotificationById(
            parseInt(id)
        )
        if (notification) {
            res.status(200).json(notification)
        } else {
            res.status(404).send("Notification not found")
        }
    } catch (error) {
        console.error(error)
        res.status(500).send("Server Error")
    }
}

export const createNotification = async (
    req: Request,
    res: Response
): Promise<void> => {
    const newNotification: Notification = req.body
    try {
        const createdNotification = await notificationRepo.createNotification(
            newNotification
        )
        res.status(201).json(createdNotification)
    } catch (error) {
        console.error(error)
        res.status(500).send("Server Error")
    }
}

export const updateNotification = async (
    req: Request,
    res: Response
): Promise<void> => {
    const { id } = req.params
    const notificationUpdates: Partial<Notification> = req.body
    try {
        const updatedNotification = await notificationRepo.updateNotification(
            parseInt(id),
            notificationUpdates
        )
        if (updatedNotification) {
            res.status(200).json(updatedNotification)
        } else {
            res.status(404).send("Notification not found")
        }
    } catch (error) {
        console.error(error)
        res.status(500).send("Server Error")
    }
}

export const deleteNotification = async (
    req: Request,
    res: Response
): Promise<void> => {
    const { id } = req.params
    try {
        await notificationRepo.deleteNotification(parseInt(id))
        res.status(204).send()
    } catch (error) {
        console.error(error)
        res.status(500).send("Server Error")
    }
}
