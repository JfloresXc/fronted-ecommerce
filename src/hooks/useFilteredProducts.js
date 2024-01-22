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

  const getProductsForSearchFetch = async ({
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
        let mappedProducts = data?.products ?? []
        mappedProducts = mappedProducts?.map((item) => ({
          ...item,
          nameCategory: item?.category?.name ?? '',
          price: parseFloat(item?.price).toFixed(2),
        }))

        console.log(mappedProducts)
        const newObject = {
          ...data,
          products: mappedProducts,
        }
        return newObject
      }
    )
  }

  const getProductsForFamilyFetch = async ({
    page,
    limit,
    order,
    idfamily,
    maxprice,
  }) => {
    return tryCatch(
      async () => {
        const URL = `/api/products/productsForFamily?page=${page}&limit=${limit}&order=${order}&idfamily=${idfamily}&maxprice=${maxprice}`
        const response = await fetch(URL)
        const data = await response.json()
        return data
      },
      (data) => {
        return data
      }
    )
  }

  const getProductsForSearch = async ({
    searchtext = DEFAULT_PARAMS.searchtext,
    page = DEFAULT_PARAMS.page,
    limit = DEFAULT_PARAMS.limit,
    order = DEFAULT_PARAMS.order,
    idcategory = DEFAULT_PARAMS.idcategory,
    idfamily = DEFAULT_PARAMS.idfamily,
    maxprice = DEFAULT_PARAMS.maxprice,
  }) => {
    const parameters = {
      searchtext,
      page,
      limit,
      order,
      idcategory,
      maxprice,
      idfamily,
    }

    const { products, totalPages, totalProducts } =
      await getProductsForSearchFetch(parameters)
    setTotalPages(totalPages)
    setFilteredProducts(products)
    setTotalProducts(totalProducts)

    return { parameters }
  }

  const getProductsForFamily = async ({
    page = DEFAULT_PARAMS.page,
    limit = DEFAULT_PARAMS.limit,
    order = DEFAULT_PARAMS.order,
    idfamily = DEFAULT_PARAMS.idfamily,
    maxprice = DEFAULT_PARAMS.maxprice,
  }) => {
    const parameters = {
      page,
      limit,
      order,
      maxprice,
      idfamily,
    }

    const { products, totalPages, totalProducts } =
      await getProductsForFamilyFetch(parameters)
    setTotalPages(totalPages)
    setFilteredProducts(products)
    setTotalProducts(totalProducts)

    return { products, totalPages, totalProducts }
  }

  return {
    filteredProducts,
    totalPages,
    totalProducts,
    getProductsForFamily,
    getProductsForSearch,
  }
}
