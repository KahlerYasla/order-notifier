// src/modules/auth/components/AuthButton.tsx
import React from "react"
import BaseButton from "../../common/components/base/BaseButton"

interface AuthButtonProps extends React.ComponentProps<typeof BaseButton> {
    isSubmitting?: boolean // Custom prop specific to AuthButton
}

const AuthButton: React.FC<AuthButtonProps> = ({
    isSubmitting = false,
    children,
    ...props
}) => {
    return (
        <BaseButton
            {...props}
            isLoading={isSubmitting} // Set loading state
        >
            {isSubmitting ? "Submitting..." : children}
        </BaseButton>
    )
}

export default AuthButton
