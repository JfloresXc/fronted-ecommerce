import { CartContext } from '@/contexts/CartContext'
import { useContext } from 'react'

export function useCart() {
  const {
    products = [],
    addOrRestToCart,
    removeOfCart,
  } = useContext(CartContext)

  const addToCart = (product) => {
    addOrRestToCart({ product, isAdd: true })
  }
  const restToCart = (product) => addOrRestToCart({ product, isAdd: false })

  return { products, addToCart, restToCart, removeOfCart }
}
