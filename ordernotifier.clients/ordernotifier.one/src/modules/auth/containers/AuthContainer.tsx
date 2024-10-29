import AuthForm from "../components/AuthForm"

interface AuthContainerProps {
    className?: string
}

export const AuthContainer: React.FC<AuthContainerProps> = ({ className }) => {
    return (
        <div className={`flex flex-col gap-4 ${className}`}>
            <p className="font-bold">Login:</p>
            <AuthForm />
        </div>
    )
}
