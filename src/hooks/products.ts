import { useCallback, useState } from "react"
import { useGetProductListQuery } from "services/product"

export const useProducts = () => {
  const [page, setPage] = useState(1)
  const [searchKey, setSearchKey] = useState("")
  const { data, isLoading } = useGetProductListQuery({ page, searchKey })
  const total = data?.total ?? 0
  const products = data?.products ?? []

  const fetchNextPage = useCallback(() => {
    setPage(prev => ++prev)
  }, [])

  const handleSearch = useCallback((value: string) => {
    setSearchKey(value)
    setPage(1)
  }, [])

  return {
    products,
    total,
    isLoading,
    fetchNextPage,
    handleSearch,
  }
}
