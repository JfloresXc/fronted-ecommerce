import React from 'react'

export default function FiltersIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 24 24"
      stroke="currentColor"
      fill="none"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 8m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" />
      <path d="M8 11a5 5 0 1 0 3.998 1.997" />
      <path d="M12.002 19.003a5 5 0 1 0 3.998 -8.003" />
    </svg>
  )
}
