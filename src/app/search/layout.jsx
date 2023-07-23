'use client'

import ProductFiltersProvider from '@/contexts/FiltersContexts'

export default function layout({ children }) {
  return (
    <>
      <ProductFiltersProvider>{children}</ProductFiltersProvider>
    </>
  )
}
