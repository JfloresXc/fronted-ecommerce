'use client'

import { useFilteredProducts } from '@/hooks/useFilteredProducts'
import { useEffect } from 'react'
import Section from '@/components/section'
import { useParamsFromQuery } from '@/hooks/useParamsFromQuery'
import ListWithFilters from '@/components/products/ListWithFilters'

function Page() {
  const { totalPages, filteredProducts, totalProducts, getProductsForSearch } =
    useFilteredProducts()
  const { searchtext, page, limit, searchParams, maxprice, order } =
    useParamsFromQuery()

  useEffect(() => {
    getProductsForSearch({
      searchtext,
      page,
      limit,
      maxprice,
      order,
    })
  }, [searchParams])

  return (
    <Section>
      <h1 className="lg:text-xl md:text-lg">
        Resultados de búsqueda: &quot;{searchtext}&quot;
      </h1>
      <ListWithFilters
        filteredProducts={filteredProducts}
        totalPages={totalPages}
        totalProducts={totalProducts}
        slug={`store/search`}
      />
    </Section>
  )
}

export default Page
