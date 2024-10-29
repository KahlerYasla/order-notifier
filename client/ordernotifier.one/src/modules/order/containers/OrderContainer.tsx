import { useUserStore } from "../../auth"

interface OrderContainerProps {
    className?: string
}

const OrderContainer: React.FC<OrderContainerProps> = ({ className }) => {
    // stores
    const userRole = useUserStore((state) => state.user.role)
    const isLoggedIn = useUserStore((state) => state.isLoggedIn)

    return (
        <div className={`flex flex-col gap-4 ${className}`}>
            <p className="font-bold">
                {userRole === "admin" ? "Orders:" : "Your Orders:"}
            </p>
            {isLoggedIn ? (
                <div>test order container</div>
            ) : (
                <div className="border-l-4 border-primary px-4">
                    Please login to view orders
                </div>
            )}
        </div>
    )
}

export default OrderContainer
