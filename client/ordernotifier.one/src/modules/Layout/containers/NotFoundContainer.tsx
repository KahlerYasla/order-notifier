interface NotFoundContainerProps {
    className?: string
}

export const NotFoundContainer: React.FC<NotFoundContainerProps> = ({
    className,
}) => {
    return (
        <div className={className}>
            <main className="main">
                <h1>404</h1>
                <p>Page not found</p>
            </main>
        </div>
    )
}
