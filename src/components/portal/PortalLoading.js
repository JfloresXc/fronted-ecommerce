'use client'

import { useLoading } from '@/hooks/useLoading'
import { useRef, useEffect } from 'react'
import { createPortal } from 'react-dom'

export const PortalLoading = ({ children }) => {
  const ref = useRef(null)
  const { isLoading } = useLoading()

  useEffect(() => {
    ref.current = document.querySelector('#portal-loading')
  }, [])

  return (
    <>
      {isLoading && ref.current
        ? createPortal(<div className="overlay">{children}</div>, ref.current)
        : null}
      <style jsx>{`
        .overlay {
          display: block;
          position: fixed;
          padding-top: 100px;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          overflow: auto;
          backdrop-filter: blur(2px);
          z-index: 50;
        }
      `}</style>
    </>
  )
}
