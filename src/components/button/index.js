'use client'

import Link from 'next/link'
import React from 'react'

const DESIGNS = {
  regular:
    'max-w-xs text-white bg-primary hover:opacity-2 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm px-5 py-2.5 text-center hover:bg-secondary text-[13px] md:text-sm lg:text-15px leading-4 h-11 md:h-[50px] px-5 lg:px-6 py-4 md:py-3.5 lg:py-4',
}

function Button({
  label,
  nameIcon,
  type = 'button',
  location = '',
  design = 'regular',
  width = '120px',
  handleClick = () => {},
}) {
  const styles = `${DESIGNS[design]} w-[${width}]`

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
