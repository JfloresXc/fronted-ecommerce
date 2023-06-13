'use client'

import Link from 'next/link'
import React from 'react'

const DESIGNS = {
  regular:
    'max-w-xs text-white bg-primary hover:opacity-2 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  hover:bg-secondary',
}

function Button({
  label,
  nameIcon,
  type = 'button',
  location = '',
  design = 'regular',
  full = true,
  handleClick = () => {},
}) {
  const styles = `${DESIGNS[design]} ${full && 'w-full '}`

  if (location) {
    return (
      <>
        <Link className={`${styles}`} href={location}>
          <i className={`fas ${nameIcon}`}></i> {label}
        </Link>
      </>
    )
  }

  return (
    <>
      <button className={`${styles}`} type={type} onClick={handleClick}>
        <i className={`fas ${nameIcon}`}></i> {label}
      </button>
    </>
  )
}

export default React.memo(Button)
