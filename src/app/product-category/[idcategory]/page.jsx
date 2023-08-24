'use client'

import { useFilteredProducts } from '@/hooks/useFilteredProducts'
import { useEffect, useState } from 'react'
import Section from '@/components/section'
import { useParamsFromQuery } from '@/hooks/useParamsFromQuery'
import { useCategories } from '@/hooks/useCategories'
import ListWithFilters from '@/components/products/ListWithFilters'

export default function Page({ params }) {
  const [category, setCategory] = useState({
    name: '',
  })
  const { name } = category
  const { idcategory = '-1' } = params
  const {
    totalPages,
    totalProducts,
    filteredProducts,
    getProductsForParameters,
  } = useFilteredProducts()
  const { searchtext, page, limit, order, maxprice, searchParams } =
    useParamsFromQuery()
  const { getOneActivedCategory } = useCategories()

  useEffect(() => {
    getProductsForParameters({
      searchtext,
      page,
      limit,
      order,
      idcategory,
      maxprice,
    })
  }, [searchParams])

  useEffect(() => {
    getOneActivedCategory({ id: idcategory }).then((category) => {
      setCategory(category)
    })
  }, [])

  return (
    <Section>
      <h1 className="text-2xl ">{name}</h1>
      <ListWithFilters
        filteredProducts={filteredProducts}
        totalPages={totalPages}
        totalProducts={totalProducts}
        slug={`product-category/${idcategory}`}
      />
    </Section>
  )
}
