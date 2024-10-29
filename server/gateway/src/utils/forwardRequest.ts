// gateway/src/utils/forwardRequest.ts
import { Request, Response } from "express"
import axios, { AxiosError } from "axios"

export const forwardRequest = async (
    req: Request,
    res: Response,
    serviceUrl: string
) => {
    try {
        const response = await axios({
            method: req.method,
            url: serviceUrl,
            headers: req.headers,
            data: req.body,
            params: req.query,
        })
        res.status(response.status).json(response.data)
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            res.status(error.response.status).json(error.response.data)
        } else {
            res.status(500).json({
                message: "An error occurred while forwarding the request.",
            })
        }
    }
}
