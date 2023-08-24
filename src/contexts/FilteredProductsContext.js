'use client'

import React, { useState } from 'react'

const Context = React.createContext({})

export default function FilteredProductsContext({ children }) {
  const [filteredProducts, setFilteredProducts] = useState([])
  const [totalPages, setTotalPages] = useState(0)
  const [totalProducts, setTotalProducts] = useState(0)

  return (
    <Context.Provider
      value={{
        filteredProducts,
        setFilteredProducts,
        totalPages,
        setTotalPages,
        totalProducts,
        setTotalProducts,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export { Context as FilteredProductsContext }
