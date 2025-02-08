import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const LIMIT = 30

export const productApi = createApi({
  reducerPath: "productApi",
  tagTypes: ["Product"],
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/products" }),
  endpoints: builder => ({
    getProductList: builder.query({
      query: page => `?skip=${LIMIT * page}&limit=${LIMIT}`,
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName
      },
      merge: (currentCache, newItems, { arg }) => {
        console.log(arg)
        if (arg === 0) {
          return newItems
        }
        currentCache.results.push(...newItems.results)
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg
      },
      providesTags: ["Product"],
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetProductListQuery } = productApi;
