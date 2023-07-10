import React, { useState } from 'react'

export const Context = React.createContext({})

export default function ProductFiltersProvider({ children }) {
  const [filters, setFilters] = useState({
    order: '',
    category: 'todos',
    rangePrice: 0,
  })

  return (
    <Context.Provider
      value={{
        filters,
        setFilters,
      }}
    >
      {children}
    </Context.Provider>
  )
}
