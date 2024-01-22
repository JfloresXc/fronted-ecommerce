'use client'

import ListOfUsers from '@/components/lists/ListOfUsers'
import { useUsers } from '@/hooks/useUsers'
import { useEffect, useState } from 'react'

export default function Page() {
  const [users, setUsers] = useState([])
  const { getAllUsers } = useUsers()

  useEffect(() => {
    getAllUsers().then((response) => {
      setUsers(response)
    })
  }, [])

  return <ListOfUsers data={users} />
}
