import type { Product } from "types"
import { Rating } from "features/products/components/Rating"
import { motion } from "motion/react"

const DESC_LIMIT_CHAR = 150

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
  const priceAfterDiscount = Number(
    price * (1 - discountPercentage / 100),
  ).toFixed(2)
  const ellipsisDesc =
    description?.length > DESC_LIMIT_CHAR
      ? description.slice(0, DESC_LIMIT_CHAR) + "..."
      : description

  return (
    <div className="w-full flex flex-col sm:flex-row items-center rounded-xl border border-solid border-gray-200  p-6 isolate bg-white/20 shadow-lg ring-1 ring-black/5">
      <div className="w-[180px] h-[180px] overflow-hidden">
        <motion.img
          whileHover={{ scale: 1.2 }}
          src={thumbnail}
          alt="thumbnail"
          className="w-full h-full object-contain overflow-hidden"
        />
      </div>
      <div className="flex flex-1 px-4 gap-2 flex-col sm:flex-row">
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
          <p className="text-[14px] text-gray-500">{ellipsisDesc}</p>
          <span className="block justify-self-end text-[12px] text-gray-500">
            Tags: {tags.join(", ")}
          </span>
        </div>
        <div className="flex gap-1 flex-col items-start sm:items-end justify-center sm:basis-sm">
          <span className="text-gray-400 line-through">${price}</span>
          <span className="font-bold text-2xl">${priceAfterDiscount}</span>
          <span className="text-sm ">Stocks: {stock}</span>
        </div>
      </div>
    </div>
  )
}
