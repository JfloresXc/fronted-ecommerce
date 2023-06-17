'use client'

import { useLocalStorage } from '@/hooks/useLocaleStorage'
import React from 'react'

const Context = React.createContext({})

export default function AuthContext({ children }) {
  const [jwt, setJwt] = useLocalStorage('jwt', '')
  const [user, setUser] = useLocalStorage('user', {})

  return (
    <Context.Provider value={{ jwt, setJwt, user, setUser }}>
      {children}
    </Context.Provider>
  )
}

export { Context as AuthContext }
