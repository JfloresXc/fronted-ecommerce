import { useContext } from 'react'
import { useRouter } from 'next/navigation'

import { AuthContext } from '@/contexts/AuthContext'
import { useError } from '@/hooks/useError'

const HEADERS = { 'Content-Type': 'application/json' }

export const useAuth = () => {
  const { handlerFetch } = useError()
  const { jwt, setJwt, user, setUser } = useContext(AuthContext)
  const router = useRouter()

  const login = async ({ email, password }) => {
    const URL = `/api/auth/login`
    const { isError, token } = await handlerFetch({
      url: URL,
      method: 'POST',
      body: { email, password },
    })

    if (isError) return
    setJwt(token)
    setUser(user)
    router.push('/admin/products')
  }

  const logout = async () => {
    const URL = `/api/auth/logout`
    const { isError } = await handlerFetch({
      url: URL,
    })
    if (isError) return

    window.localStorage.clear()
    setJwt('')
    router.push('/admin/login')
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
