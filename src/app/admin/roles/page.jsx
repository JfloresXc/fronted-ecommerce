'use client'

import ListOfRoles from '@/components/lists/ListOfRoles'
import { useRoles } from '@/hooks/useRoles'
import { useEffect, useState } from 'react'

export default function Page() {
  const [roles, setRoles] = useState([])
  const { getAllRoles } = useRoles()

  useEffect(() => {
    getAllRoles().then(setRoles)
  }, [])

  return <ListOfRoles roles={roles} />
}
