interface CartContainerProps {
    className?: string
}

const CartContainer: React.FC<CartContainerProps> = ({ className }) => {
    return (
        <div className={`${className}`}>
            <h1>Cart Container</h1>
        </div>
    )
}
