import axios from "axios"
import { create } from "zustand"

interface UserStore {
    role: string
    setRole: (role: string) => void
}

export const useUserStore = create<UserStore>((set) => ({
    role: "user",
    setRole: (role) => set({ role }),
}))
