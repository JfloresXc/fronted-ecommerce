'use client'

import { useFilteredProducts } from '@/hooks/useFilteredProducts'
import { useEffect, useState } from 'react'
import Section from '@/components/section'
import { useParamsFromQuery } from '@/hooks/useParamsFromQuery'
import ListWithFilters from '@/components/products/ListWithFilters'

export default function Page({ params }) {
  const [familyName, setFamilyName] = useState('')
  const { idfamily = '-1' } = params
  const { totalPages, totalProducts, filteredProducts, getProductsForFamily } =
    useFilteredProducts()
  const { page, limit, order, maxprice, searchParams } = useParamsFromQuery()

  useEffect(() => {
    getProductsForFamily({
      idfamily,
      page,
      limit,
      order,
      maxprice,
    }).then((data) => {
      const products = data?.products
      const category = products?.[0]?.category
      const family = category?.family?.name

      if (family) setFamilyName(family)
    })
  }, [searchParams])

  return (
    <Section>
      <h1 className="text-2xl ">Colección {familyName}</h1>
      <ListWithFilters
        filteredProducts={filteredProducts}
        totalPages={totalPages}
        totalProducts={totalProducts}
        slug={`product-family/${idfamily}`}
      />
    </Section>
  )
}
