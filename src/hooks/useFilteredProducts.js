import { useContext } from 'react'
import { FilteredProductsContext } from '@/contexts/FilteredProductsContext'
import { useError } from './useError'
import { DEFAULT_PARAMS } from '@/utils/paramsDefault'

export function useFilteredProducts() {
  const { tryCatch } = useError()

  const {
    filteredProducts,
    setFilteredProducts,
    totalPages,
    setTotalPages,
    totalProducts,
    setTotalProducts,
  } = useContext(FilteredProductsContext)

  const getProductsForSearchParameters = async ({
    searchtext,
    page,
    limit,
    order,
    idcategory,
    maxprice,
  }) => {
    return tryCatch(
      async () => {
        const URL = `/api/products/productsForSearchParameters?searchtext=${searchtext}&page=${page}&limit=${limit}&order=${order}&idcategory=${idcategory}&maxprice=${maxprice}`
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
    searchtext = DEFAULT_PARAMS.searchtext,
    page = DEFAULT_PARAMS.page,
    limit = DEFAULT_PARAMS.limit,
    order = DEFAULT_PARAMS.order,
    idcategory = DEFAULT_PARAMS.idcategory,
    maxprice = DEFAULT_PARAMS.maxprice,
  }) => {
    const parameters = {
      searchtext,
      page,
      limit,
      order,
      idcategory,
      maxprice,
    }

    const { products, totalPages, totalProducts } =
      await getProductsForSearchParameters(parameters)

    setTotalPages(totalPages)
    setFilteredProducts(products)
    setTotalProducts(totalProducts)
    return { parameters }
  }

  return {
    filteredProducts,
    totalPages,
    totalProducts,
    getProductsForSearchParameters,
    getProductsForParameters,
  }
}
