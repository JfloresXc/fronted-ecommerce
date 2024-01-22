'use client'

import ListOfFamilies from '@/components/lists/ListOfFamilies'
import { useFamilies } from '@/hooks/useFamilies'
import { useEffect, useState } from 'react'

export default function Page() {
  const [families, setFamilies] = useState([])
  const { getAllFamilies } = useFamilies()

  useEffect(() => {
    getAllFamilies().then((response) => {
      setFamilies(response)
    })
  }, [])

  return <ListOfFamilies data={families} />
}
