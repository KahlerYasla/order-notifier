// src/modules/common/components/base/BaseInputField.tsx
import React from "react"

interface BaseInputFieldProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string
    errorMessage?: string
}

const BaseInputField: React.FC<BaseInputFieldProps> = ({
    label,
    errorMessage,
    className = "",
    ...props
}) => {
    return (
        <div className="flex flex-col space-y-1">
            {label && (
                <label className="text-sm font-medium text-gray-300">
                    {label}
                </label>
            )}
            <input
                {...props}
                className={`border-b border-gray-500 border-opacity-20 bg-black px-3 py-2 text-gray-300 transition duration-150 focus:border-primary focus:outline-none ${className}`}
            />
            {errorMessage && (
                <p className="text-xs text-red-500">{errorMessage}</p>
            )}
        </div>
    )
}

export default BaseInputField
