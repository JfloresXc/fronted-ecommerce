'use client'

import { useRef, useEffect } from 'react'
import { createPortal } from 'react-dom'

export const PortalModal = ({ children, handleClose }) => {
  const ref = useRef(null)

  useEffect(() => {
    ref.current = document.querySelector('#portal-modal')
  }, [])

  return (
    <>
      {ref.current
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
          z-index: 20;
        }
      `}</style>
    </>
  )
}
