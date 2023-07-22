'use client'

import { useAuth } from '@/hooks/useAuth'

export default function Logout() {
  const { logout } = useAuth()

  logout()
  return <></>
}
