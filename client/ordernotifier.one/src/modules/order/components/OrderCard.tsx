import BaseCard from "../../common/components/base/BaseCard"
import { Order } from "../types/order"

interface OrderCardProps {
    order: Order
}

const OrderCard: React.FC<OrderCardProps> = ({ order }) => {
    return (
        <BaseCard>
            <div>
                <h3>Order ID: {order.id}</h3>
                <p>Total Amount: ${order.totalAmount}</p>
                <p>Status: {order.status}</p>
                <p>Created At: {order.createdAt.toLocaleString()}</p>
                <p>Updated At: {order.updatedAt.toLocaleString()}</p>
            </div>
        </BaseCard>
    )
}
