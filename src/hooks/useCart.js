import { CartContext } from '@/contexts/CartContext'
import { useContext } from 'react'

export function useCart() {
  const {
    products = [],
    addOrRestToCart,
    removeOfCart,
    cleanCart,
  } = useContext(CartContext)

  const addToCart = (product) => {
    addOrRestToCart({ product, isAdd: true })
  }

  const restToCart = (product) => addOrRestToCart({ product, isAdd: false })

  const findProduct = (idProduct) => {
    const findedProduct = products?.find((product) => product.id === idProduct)
    const quantity = findedProduct?.quantity ?? 0
    return quantity
  }

  const getTotal = () => {
    let total = 0
    products.forEach((product) => {
      total += product.price * product.quantity
    })

    return parseFloat(total).toFixed(2)
  }

  return {
    products,
    addToCart,
    restToCart,
    removeOfCart,
    findProduct,
    getTotal,
    cleanCart,
  }
}
