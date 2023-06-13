'use client'

import { useLocalStorage } from '@/hooks/useLocaleStorage'
import React, { useState } from 'react'

const Context = React.createContext({})

export default function AuthContext({ children }) {
  const [jwt, setJwt] = useLocalStorage('jwt', '')
  const [loading, setLoading] = useState(false)

  return (
    <Context.Provider value={{ jwt, setJwt, loading, setLoading }}>
      {children}
    </Context.Provider>
  )
}

export { Context as AuthContext }
