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
        <div className={`gap-8 ${className}`}>
            <p className="font-bold">Products:</p>
            <div className="mt-4 flex flex-col gap-8">
                {productList.map((product: Product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        onClick={onProductClick}
                    />
                ))}
            </div>
        </div>
    )
}
