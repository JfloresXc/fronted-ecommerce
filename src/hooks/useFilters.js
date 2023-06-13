import { useContext } from 'react'
import { Context as FiltersContext } from '@/contexts/FiltersContexts'

export function useFilters() {
  const { filters, setFilters } = useContext(FiltersContext)

  const filterProducts = (products) => {
    const filteredProducts = products.filter((product) => {
      return (
        product.price >= filters?.minPrice &&
        (filters?.category === 'all' || product.category === filters?.category)
      )
    })
    return filteredProducts
  }

  return { filters, filterProducts, setFilters }
}
