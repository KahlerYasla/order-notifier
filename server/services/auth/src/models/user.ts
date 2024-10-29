import pool from "../utils/db.client"
import bcrypt from "bcryptjs"

export interface User {
    id?: number
    username: string
    password: string
    created_at?: Date
}

export class UserModel {
    async findByUsername(username: string): Promise<User | null> {
        const res = await pool.query(
            "SELECT * FROM users WHERE username = $1",
            [username]
        )
        return res.rows[0] || null
    }

    async createUser(user: User): Promise<User> {
        const hashedPassword = await bcrypt.hash(user.password, 10)
        const res = await pool.query(
            "INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *",
            [user.username, hashedPassword]
        )
        return res.rows[0]
    }

    async comparePassword(
        plainPassword: string,
        hashedPassword: string
    ): Promise<boolean> {
        return bcrypt.compare(plainPassword, hashedPassword)
    }
}
