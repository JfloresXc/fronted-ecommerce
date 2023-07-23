'use client'

import React, { useState } from 'react'

const Context = React.createContext({})

export default function ProductsContext({ children }) {
  const [products, setProducts] = useState([])
  const [totalPages, setTotalPages] = useState(0)

  return (
    <Context.Provider
      value={{ products, setProducts, totalPages, setTotalPages }}
    >
      {children}
    </Context.Provider>
  )
}

export { Context as ProductsContext }
