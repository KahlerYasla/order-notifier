import { NotificationList, OrderList, ProductList } from "../types/itemList"

interface ListingGridProps {
    className?: string
    listings: OrderList | ProductList | NotificationList
}

const ListingGrid: React.FC<ListingGridProps> = ({ className, listings }) => {
    return (
        <div className={className}>
            <div className="listing-grid">
                {listings.map((listing) => (
                    <p>listing grid test</p>
                ))}
            </div>
        </div>
    )
}

export default ListingGrid
