import React, { useState } from 'react'

export const Context = React.createContext({})

export default function FiltersProvider({ children }) {
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0,
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
