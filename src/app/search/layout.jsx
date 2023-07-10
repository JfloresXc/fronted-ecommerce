'use client'

import ProductFiltersProvider from '@/contexts/FiltersContexts'
import ProductsContext from '@/contexts/ProductsContext'

export default function layout({ children }) {
  return (
    <>
      <ProductsContext>
        <ProductFiltersProvider>{children}</ProductFiltersProvider>
      </ProductsContext>
    </>
  )
}
