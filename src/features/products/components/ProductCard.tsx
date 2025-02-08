import type { Product } from "types"
import { Rating } from "features/products/components/Rating"
import { motion } from "motion/react"

export const ProductCard: React.FC<Product> = ({
  title,
  sku,
  rating,
  thumbnail,
  brand,
  reviews,
  description,
  tags,
  price,
  discountPercentage,
  stock,
}) => {
  return (
    <div className="w-full rounded-xl border border-solid border-gray-200 flex items-center p-6 isolate bg-white/20 shadow-lg ring-1 ring-black/5">
      <div className="w-[180px] h-[180px] overflow-hidden">
        <motion.img
          whileHover={{ scale: 1.2 }}
          src={thumbnail}
          alt="thumbnail"
          className="w-full h-full object-contain overflow-hidden"
        />
      </div>
      <div className="flex flex-1 px-4">
        <div className="flex flex-col gap-1 basis-full text-left self-star">
          <h6 className="text-sm text-gray-400 font-medium">
            {brand?.toUpperCase()}
          </h6>
          <h4 className="text-2xl font-bold">{title}</h4>
          <span className="text-sm">SKU: {sku}</span>
          <div className="flex flex-nowrap items-center gap-2">
            <Rating rating={Math.floor(rating)} size={16} />
            <span className="text-amber-500 font-medium">
              {reviews.length} Reviews
            </span>
          </div>
          <p className="text-[14px] text-gray-500">
            {description.slice(0, 100)}...
          </p>
          <span className="block justify-self-end text-[12px] text-gray-500">
            Tags: {tags.join(", ")}
          </span>
        </div>
        <div className="flex gap-1 flex-col items-end justify-center basis-sm">
          <span className="text-gray-400 line-through">${price}</span>
          <span className="font-bold text-2xl">
            ${Number(price * (1 - discountPercentage / 100)).toFixed(2)}
          </span>
          <span className="text-sm ">Stocks: {stock}</span>
        </div>
      </div>
    </div>
  )
}
