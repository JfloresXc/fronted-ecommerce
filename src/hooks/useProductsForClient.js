import { useContext } from 'react'
import { ProductsContext } from '@/contexts/ProductsContext'
import { useError } from './useError'

export function useProductsForClient() {
  const { products, setProducts, totalPages, setTotalPages } =
    useContext(ProductsContext)
  const { tryCatch } = useError()

  const getProductsForSearchParameters = async ({
    searchtext,
    page,
    limit,
  }) => {
    return tryCatch(
      async () => {
        const URL = `/api/products/productsForSearchParameters?searchtext=${searchtext}&page=${page}&limit=${limit}`
        const response = await fetch(URL)
        const data = await response.json()
        return data
      },
      (data) => {
        return data
      }
    )
  }

  const getProductsForParameters = async ({ searchtext, page, limit }) => {
    const parameters = {
      searchtext: searchtext ?? '',
      page: page ?? 1,
      limit: limit ?? 10,
    }

    const { products, totalPages } = await getProductsForSearchParameters(
      parameters
    )

    setTotalPages(totalPages)
    setProducts(products)

    return { parameters }
  }

  return {
    products,
    setProducts,
    totalPages,
    setTotalPages,
    getProductsForSearchParameters,
    getProductsForParameters,
  }
}
