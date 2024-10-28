import { BaseButton } from "../../common"
import { Product } from "../types/product"

// icons
import { FaChevronRight } from "react-icons/fa"

interface ProductCardProps {
    product: Product
    onClick: (product: Product) => void
}

export const ProductCard = ({ product, onClick }: ProductCardProps) => {
    return (
        <div onClick={() => onClick(product)} className="cursor-pointer py-4">
            <div className="flex justify-between gap-10">
                <div>
                    <h2 className="font-bold">{product.name}</h2>
                    <p className="text-sm text-gray-600">
                        {product.description}
                    </p>
                </div>
                <div className="flex items-center">
                    <span className="font-bold">in stock:</span>
                    <span
                        className={`ml-2 px-2 py-1 text-sm font-bold ${
                            product.stock === 0 ? "bg-primary text-white" : ""
                        }`}
                    >
                        {product.stock}
                    </span>
                </div>
                <div className="flex items-center">
                    <span className="font-bold">${product.price}</span>
                </div>
                <BaseButton className="flex flex-row flex-nowrap items-center gap-2">
                    order
                    <FaChevronRight />
                </BaseButton>
            </div>
        </div>
    )
}
