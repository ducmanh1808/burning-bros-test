import { ProductList } from "features/products/components/ProductList"
import { ProductSearch } from "features/products/components/ProductSearch"
import { useProducts } from "hooks/products"

export const Product = () => {
  const { handleSearch, products, total, isLoading, fetchNextPage } =
    useProducts()

  return (
    <div className="w-full px-48 text-center">
      <h1 className="font-bold text-5xl">Products</h1>
      <ProductSearch handleSearch={handleSearch} />
      <ProductList
        dataSource={products}
        total={total}
        isLoading={isLoading}
        fetchMore={fetchNextPage}
      />
    </div>
  )
}
