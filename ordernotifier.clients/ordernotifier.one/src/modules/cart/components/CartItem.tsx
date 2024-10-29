interface CartItemProps {
    className?: string
}

const CartItem: React.FC<CartItemProps> = ({ className }) => {
    return (
        <div className={`${className}`}>
            <h1>Cart Item</h1>
        </div>
    )
}
