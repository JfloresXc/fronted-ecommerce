import { useContext } from 'react'
import { ProductsContext } from '@/contexts/ProductsContext'
import { useError } from './useError'

export function useProductsForClient() {
  const { products, setProducts } = useContext(ProductsContext)
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

  return { products, setProducts, getProductsForSearchParameters }
}
