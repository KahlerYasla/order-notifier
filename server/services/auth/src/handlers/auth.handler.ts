import { Request, Response } from "express"
import { AuthRepo } from "../repos/auth.repo"
import { generateToken } from "../utils/jwt.util"

const authRepo = new AuthRepo()

export const register = async (req: Request, res: Response): Promise<void> => {
    const { username, password } = req.body
    try {
        const user = await authRepo.register({ username, password })
        const token = generateToken(user.id!)
        res.status(201).json({ user, token })
    } catch (error) {
        console.error(error)
        res.status(500).send("Server Error")
    }
}

export const login = async (req: Request, res: Response): Promise<void> => {
    const { username, password } = req.body
    try {
        const user = await authRepo.login(username, password)
        if (user) {
            const token = generateToken(user.id!)
            res.status(200).json({ user, token })
        } else {
            res.status(401).send("Invalid credentials")
        }
    } catch (error) {
        console.error(error)
        res.status(500).send("Server Error")
    }
}
