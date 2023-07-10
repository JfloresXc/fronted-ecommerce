import { useContext } from 'react'
import { ProductsContext } from '@/contexts/ProductsContext'

export function useProductsForClient() {
  const { products, setProducts } = useContext(ProductsContext)

  return { products, setProducts }
}
