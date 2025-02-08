import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import type { ProductResponse } from "types"

const LIMIT = 30

export const productApi = createApi({
  reducerPath: "productApi",
  tagTypes: ["Product"],
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/products" }),
  endpoints: builder => ({
    getProductList: builder.query<
      ProductResponse,
      { page?: number; searchKey?: string }
    >({
      query: ({ page = 1, searchKey }) => {
        const params = `skip=${LIMIT * (page - 1)}&limit=${LIMIT}${searchKey ? `&q=${searchKey}` : ""}`
        if (searchKey) {
          return `/search?${params}`
        }
        return `?${params}`
      },
      serializeQueryArgs: ({ endpointName }) => endpointName,
      merge: (currentCache, newRes, { arg }) => {
        if (arg.page === 1) {
          return newRes
        }
        return (currentCache = {
          ...currentCache,
          ...newRes,
          products: [...currentCache.products, ...newRes.products],
        })
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg
      },
      providesTags: ["Product"],
    }),
  }),
})

export const { useGetProductListQuery } = productApi
