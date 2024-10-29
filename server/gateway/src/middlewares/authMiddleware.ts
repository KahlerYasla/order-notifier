// gateway/src/middlewares/auth.ts
import { Request, Response, NextFunction } from "express"
import axios from "axios"

// dtos
import { ValidateResponse } from "../types/responses/validateResponse"

export const validateAuthToken = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<Response | any> => {
    const token = req.headers.authorization?.split(" ")[1]
    if (!token) {
        return res
            .status(401)
            .json({ message: "Unauthorized: No token provided" })
    }

    try {
        const response: ValidateResponse = await axios.post(
            "http://auth:3000/validate",
            { token }
        )

        if (response.data.isValid) {
            next() // Token is valid, proceed to next middleware
        } else {
            return res
                .status(401)
                .json({ message: "Unauthorized: Invalid token" })
        }
    } catch (error) {
        // Check if the error is an Axios error and handle accordingly
        if (axios.isAxiosError(error)) {
            return res.status(500).json({
                message: "Authentication service error",
                error: error.message,
            })
        }
        // Handle any other errors
        return res.status(500).json({ message: "Internal Server Error" })
    }
}
