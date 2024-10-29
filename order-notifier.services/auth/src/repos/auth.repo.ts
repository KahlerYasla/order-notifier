import { User, UserModel } from "../models/user"

export class AuthRepo {
    private userModel = new UserModel()

    async register(user: User): Promise<User> {
        return this.userModel.createUser(user)
    }

    async login(username: string, password: string): Promise<User | null> {
        const user = await this.userModel.findByUsername(username)
        if (
            user &&
            (await this.userModel.comparePassword(password, user.password))
        ) {
            return user
        }
        return null
    }
}
