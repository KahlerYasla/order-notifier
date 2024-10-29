import { useCartStore } from "../stores/useCartStore"

interface CartContainerProps {
    className?: string
}

const CartContainer: React.FC<CartContainerProps> = ({ className }) => {
    // stores
    const cart = useCartStore((state) => state.cart)

    return (
        <div className={`flex flex-col gap-4 ${className}`}>
            <p className="font-bold">Your Cart:</p>
            {cart.productIds.length === 0 ? (
                <p className="border-l-4 border-primary px-4">
                    Your cart is empty
                </p>
            ) : (
                <ul>
                    {cart.productIds.map((productId) => (
                        <li key={productId}>{productId}</li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default CartContainer
