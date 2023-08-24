'use client'

import { useFilteredProducts } from '@/hooks/useFilteredProducts'
import { useEffect } from 'react'
import Section from '@/components/section'
import { useParamsFromQuery } from '@/hooks/useParamsFromQuery'
import ListWithFilters from '@/components/products/ListWithFilters'

function Page() {
  const {
    totalPages,
    filteredProducts,
    totalProducts,
    getProductsForParameters,
  } = useFilteredProducts()
  const { searchtext, page, limit, searchParams, maxprice, order } =
    useParamsFromQuery()

  useEffect(() => {
    getProductsForParameters({
      searchtext,
      page,
      limit,
      maxprice,
      order,
    })
  }, [searchParams])

  return (
    <Section>
      <h1 className="text-2xl ">
        Resultados de búsqueda: &quot;{searchtext}&quot;
      </h1>
      <ListWithFilters
        filteredProducts={filteredProducts}
        totalPages={totalPages}
        totalProducts={totalProducts}
        slug={`search`}
      />
    </Section>
  )
}

export default Page
