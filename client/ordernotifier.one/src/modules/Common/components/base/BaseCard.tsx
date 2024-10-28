// src/modules/common/components/base/BaseCard.tsx
import React from "react"

interface BaseCardProps extends React.HTMLAttributes<HTMLDivElement> {
    title?: string
    footer?: React.ReactNode
}

const BaseCard: React.FC<BaseCardProps> = ({
    title,
    footer,
    children,
    className = "",
    ...props
}) => {
    return (
        <div
            {...props}
            className={`rounded-md border border-gray-200 bg-white p-4 shadow-md ${className}`}
        >
            {title && (
                <h3 className="mb-3 text-lg font-semibold text-gray-800">
                    {title}
                </h3>
            )}
            <div className="mb-3">{children}</div>
            {footer && (
                <div className="mt-3 border-t border-gray-200 pt-3">
                    {footer}
                </div>
            )}
        </div>
    )
}

export default BaseCard
