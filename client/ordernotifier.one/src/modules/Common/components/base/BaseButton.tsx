// src/modules/common/components/base/BaseButton.tsx
import React from "react"

interface BaseButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "danger"
    isLoading?: boolean
    className?: string
}

// Utility function for Tailwind classes based on variant
const getButtonClasses = (
    variant: "primary" | "secondary" | "danger",
    disabled: boolean,
) => {
    const baseStyles = `px-4 py-2 font-bold focus:outline-none transition duration-150`
    const disabledStyles = `opacity-50 cursor-not-allowed`
    const variantStyles = {
        primary: `border-b-4 border-gray-500 border-opacity-20 bg-opacity-[3%] bg-white hover:bg-opacity-5`,
        secondary: `border-b-4 border-secondary bg-black bg-opacity-5 hover:bg-opacity-10`,
        danger: `border-b-4 border-danger bg-black bg-opacity-5 hover:bg-opacity-10`,
    }

    return `${baseStyles} ${variantStyles[variant]} ${!disabled ? "" : disabledStyles}`
}

const BaseButton: React.FC<BaseButtonProps> = ({
    className,
    variant = "primary",
    isLoading = false,
    disabled = false,
    children,
    ...props
}) => {
    return (
        <button
            {...props}
            className={`${className} ${getButtonClasses(variant, disabled)}`}
            disabled={disabled || isLoading}
        >
            {isLoading ? "loading..." : children}
        </button>
    )
}

export default BaseButton
