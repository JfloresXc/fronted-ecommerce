import React, { useState } from 'react'
import data from '@/mocks/products.json'

const Context = React.createContext({})

export default function ProductsContext({ children }) {
  const { products: productsData } = data
  const [products, setProducts] = useState(productsData)

  return (
    <Context.Provider value={{ products, setProducts }}>
      {children}
    </Context.Provider>
  )
}

export { Context as ProductsContext }
