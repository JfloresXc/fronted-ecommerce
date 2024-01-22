import { useContext } from 'react'
import { useRouter } from 'next/navigation'

import { AuthContext } from '@/contexts/AuthContext'
import { useError } from '@/hooks/useError'

const HEADERS = { 'Content-Type': 'application/json' }

export const useAuth = () => {
  const { tryCatch } = useError()
  const { jwt, setJwt, user, setUser } = useContext(AuthContext)
  const router = useRouter()

  const login = async ({ email, password }) => {
    tryCatch(
      async () => {
        const URL = `/api/auth/login`
        const response = await fetch(URL, {
          method: 'POST',
          headers: HEADERS,
          body: JSON.stringify({ email, password }),
        })
        const data = await response.json()
        return data
      },
      ({ token = '', user = {} }) => {
        setJwt(token)
        setUser(user)
        router.push('/admin/products')
      }
    )
  }

  const logout = async () => {
    tryCatch(
      async () => {
        const URL = `/api/auth/logout`
        const response = await fetch(URL)
        const data = await response.json()
        return data
      },
      () => {
        window.localStorage.clear()
        setJwt('')
        router.push('/admin/login')
      }
    )
  }

  return {
    isLogged: Boolean(jwt),
    jwt,
    setJwt,
    idUser: user?.id,
    login,
    logout,
    HEADERS: { ...HEADERS, Authorization: `Bearer ${jwt}` },
  }
}
