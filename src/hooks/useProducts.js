import { useContext } from 'react'
import { ProductsContext } from '@/contexts/ProductsContext'

export function useProducts() {
  const { products, setProducts } = useContext(ProductsContext)

  return { products, setProducts }
}
