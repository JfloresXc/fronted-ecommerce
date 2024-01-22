'use client'

import ListOfProducts from '@/components/lists/ListOfProducts'
import { useProducts } from '@/hooks/useProducts'
import { useEffect, useState } from 'react'

export default function Page() {
  const [products, setProducts] = useState([])
  const { getAllProducts } = useProducts()

  useEffect(() => {
    getAllProducts().then((response) => {
      setProducts(response)
    })
  }, [])

  return <ListOfProducts data={products} />
}
