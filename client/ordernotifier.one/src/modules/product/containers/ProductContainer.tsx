import { ProductCard } from "../components/ProductCard"
import { Product } from "../types/product"

interface ProductContainerProps {
    className?: string
    productList: Product[]
    onProductClick: (product: Product) => void
}

export const ProductContainer = ({
    className,
    productList,
    onProductClick,
}: ProductContainerProps) => {
    return (
        <div className={`space-y-6 ${className}`}>
            <p className="font-bold">Products:</p>
            {productList.map((product: Product) => (
                <ProductCard
                    key={product.id}
                    product={product}
                    onClick={onProductClick}
                />
            ))}
        </div>
    )
}
