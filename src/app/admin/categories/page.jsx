'use client'

import ListOfCategories from '@/components/lists/ListOfCategories'
import { useCategories } from '@/hooks/useCategories'
import { useEffect, useState } from 'react'

export default function Page() {
  const [categories, setCategories] = useState([])
  const { getAllCategories } = useCategories()

  useEffect(() => {
    getAllCategories().then((response) => {
      setCategories(response)
    })
  }, [])

  return <ListOfCategories data={categories} />
}
