'use client'

import { useAuth } from '@/hooks/useAuth'
import AdminNavbar from './AdminNavbar'
import ClientNavbar from './ClientNavbar'

export default function Navbar() {
  const { isLogged } = useAuth()

  if (isLogged) return <AdminNavbar />
  return <ClientNavbar />

  // return (
  //   <>
  //     <ClientNavbar />
  //     <AdminNavbar />
  //   </>
  // )
}
