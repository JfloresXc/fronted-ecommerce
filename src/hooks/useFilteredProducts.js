import { useContext } from 'react'
import { FilteredProductsContext } from '@/contexts/FilteredProductsContext'
import { useError } from './useError'

export function useFilteredProducts() {
  const { tryCatch } = useError()

  const { filteredProducts, setFilteredProducts, totalPages, setTotalPages } =
    useContext(FilteredProductsContext)

  const getProductsForSearchParameters = async ({
    searchtext,
    page,
    limit,
    order,
    idcategory = '',
  }) => {
    return tryCatch(
      async () => {
        const URL = `/api/products/productsForSearchParameters?searchtext=${searchtext}&page=${page}&limit=${limit}&order=${order}&idcategory=${idcategory}&`
        const response = await fetch(URL)
        const data = await response.json()
        return data
      },
      (data) => {
        return data
      }
    )
  }

  const getProductsForParameters = async ({
    searchtext,
    page,
    limit,
    order,
    idcategory,
  }) => {
    const parameters = {
      searchtext,
      page,
      limit,
      order,
      idcategory,
    }

    const { products, totalPages } = await getProductsForSearchParameters(
      parameters
    )

    setTotalPages(totalPages)
    setFilteredProducts(products)

    return { parameters }
  }

  return {
    filteredProducts,
    totalPages,
    getProductsForSearchParameters,
    getProductsForParameters,
  }
}
