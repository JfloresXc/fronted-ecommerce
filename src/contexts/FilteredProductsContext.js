'use client'

import React, { useState } from 'react'

const Context = React.createContext({})

export default function FilteredProductsContext({ children }) {
  const [filteredProducts, setFilteredProducts] = useState([])
  const [totalPages, setTotalPages] = useState(0)
  const [filters, setFilters] = useState({
    order: '',
    category: 'todos',
    rangePrice: 1000,
  })

  return (
    <Context.Provider
      value={{
        filteredProducts,
        setFilteredProducts,
        totalPages,
        setTotalPages,
        filters,
        setFilters,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export { Context as FilteredProductsContext }
