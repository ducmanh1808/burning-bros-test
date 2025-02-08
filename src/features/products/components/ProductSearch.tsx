import { useDebounce } from "hooks/common"
import { useEffect, useState } from "react"
import { IoSearchOutline } from "react-icons/io5"

type ProductSearchProps = {
  handleSearch: (value: string) => void
}

export const ProductSearch: React.FC<ProductSearchProps> = ({
  handleSearch,
}) => {
  const [inputValue, setInputValue] = useState("")
  const debouncedSearch = useDebounce(inputValue, 500) // Debounce input

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setInputValue(event.target.value)
  }

  useEffect(() => {
    handleSearch(debouncedSearch)
  }, [handleSearch, debouncedSearch])

  return (
    <div className="my-6">
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none text-gray-400">
          <IoSearchOutline size={24} />
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full p-4 ps-10 text-sm text-gray-900 border !border-gray-300 rounded-lg focus:outline-none"
          placeholder="Keyword"
          value={inputValue}
          onChange={handleSearchInputChange}
        />
      </div>
    </div>
  )
}
