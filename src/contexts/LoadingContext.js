'use client'

import React, { useState } from 'react'

const Context = React.createContext({})

export default function LoadingContext({ children }) {
  const [loading, setLoading] = useState(false)

  return (
    <Context.Provider value={{ loading, setLoading }}>
      {children}
    </Context.Provider>
  )
}

export { Context as LoadingContext }
