'use client'

import { useAuth } from '@/hooks/useAuth'
import AdminNavbar from './AdminNavbar'
import SearchNavbar from './SearchNavbar'
import CollectionsNavbar from './CollectionsNavbar'

export default function Navbar() {
  const { isLogged } = useAuth()

  if (isLogged) return <AdminNavbar />
  return (
    <>
      <SearchNavbar />
      <CollectionsNavbar />
    </>
  )
}
