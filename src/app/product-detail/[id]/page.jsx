'use client'

import { useEffect, useState } from 'react'
import Section from '@/components/section'
import useProductDetail from '@/hooks/useProductDetail'

export default function Page({ params }) {
  const [product, setProduct] = useState({
    name: '',
  })
  const { id = '-1' } = params
  const { getOneProductDetail } = useProductDetail()

  useEffect(() => {
    getOneProductDetail({ id }).then((product) => {
      setProduct(product)
    })
  }, [])

  return (
    <Section>
      <h1 className="text-2xl ">Producto {product?.name}</h1>
    </Section>
  )
}
