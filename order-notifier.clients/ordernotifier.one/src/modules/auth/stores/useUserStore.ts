import axios from "axios"
import { create } from "zustand"

// types
import { User } from "../types/user"
import { UserResponse } from "../types/user.response"

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3001"

interface UserStore {
    user: User
    isLoggedIn: boolean
    token: string
    login: (email: string, password: string) => Promise<Error | null>
}

export const useUserStore = create<UserStore>((set) => ({
    user: {
        id: "0",
        email: "none",
        role: "none",
        passwordHash: "",
        username: "none",
    },
    isLoggedIn: false,
    token: "",
    login: async (email, password) => {
        try {
            const response = await axios.post<UserResponse>(
                API_URL + "/api/auth/login",
                {
                    email,
                    password,
                },
            )
            set({
                user: {
                    id: response.data.id,
                    email: email,
                    role: response.data.role,
                    username: response.data.username,
                },
                isLoggedIn: true,
                token: response.data.token,
            })
            console.log("user successfully logged in:", response.data)
            return null
        } catch (error) {
            console.error(error)
            return error as Error
        }
    },
}))
