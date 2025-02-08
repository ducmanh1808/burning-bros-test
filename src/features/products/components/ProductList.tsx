import { MotionCard } from "features/products/components/MotionCard"
import { ProductCard } from "features/products/components/ProductCard"
import { ImSpinner2 } from "react-icons/im"
import InfiniteScroll from "react-infinite-scroll-component"
import type { Product } from "types"

type ProductListProps = {
  dataSource: Product[]
  isLoading: boolean
  total: number
  fetchMore: () => void
}

export const ProductList: React.FC<ProductListProps> = ({
  dataSource,
  isLoading,
  total,
  fetchMore,
}) => {
  const totalFetched = dataSource?.length ?? 0

  if (isLoading) {
    return (
      <div className="w-full">
        <ImSpinner2 className="m-auto text-gray-400 animate-spin" size={48} />
      </div>
    )
  }

  return (
    <>
      <div className="text-right text-sm mb-1 text-gray-400">
        {totalFetched} of {total} products
      </div>
      <InfiniteScroll
        dataLength={totalFetched}
        next={fetchMore}
        hasMore={totalFetched < total}
        loader={
          <div className="w-full p-2">
            <ImSpinner2
              className="m-auto text-gray-400 animate-spin"
              size={24}
            />
          </div>
        }
        className="flex flex-col gap-4 !overflow-x-hidden"
      >
        {dataSource?.map(item => (
          <MotionCard key={item.id}>
            <ProductCard {...item} />
          </MotionCard>
        ))}
      </InfiniteScroll>
    </>
  )
}
