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
                <label className="text-sm font-medium text-gray-700">
                    {label}
                </label>
            )}
            <input
                {...props}
                className={`border-b px-3 py-2 text-gray-700 transition duration-150 focus:border-blue-500 focus:outline-none ${className}`}
            />
            {errorMessage && (
                <p className="text-xs text-red-500">{errorMessage}</p>
            )}
        </div>
    )
}

export default BaseInputField
