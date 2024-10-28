import React, { useState } from "react"
import AuthButton from "./AuthButton"
import InputField from "./InputField"

interface AuthFormProps {
    className?: string
}

const AuthForm: React.FC<AuthFormProps> = ({ className }) => {
    // Define state variables for email and password
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    // Handle form submission (optional, add your logic here)
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()
        console.log("Email:", email)
        console.log("Password:", password)
        // Add authentication logic here
    }

    return (
        <div className={`${className}`}>
            <form className="flex flex-row space-x-8" onSubmit={handleSubmit}>
                <InputField
                    type="text"
                    placeholder="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} // Update email state
                />
                <InputField
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} // Update password state
                />
                <AuthButton type="submit">submit</AuthButton>
            </form>
        </div>
    )
}

export default AuthForm
