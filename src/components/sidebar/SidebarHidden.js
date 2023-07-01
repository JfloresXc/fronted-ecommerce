'use client'

import { useState } from 'react'
import { ArrowToBottomIcon, UserIcon } from '../icons'
import Routes from './Routes'

export default function SidebarHidden() {
  const [isVisible, setVisible] = useState(false)

  return (
    <div className="lg:hidden">
      <div className="relative w-full font-body">
        <button
          className="relative flex items-center w-full p-4 border rounded cursor-pointer text-brand-dark md:p-5 text-right focus:outline-none border-border-base"
          id="headlessui-listbox-button-:rt:"
          type="button"
          aria-haspopup="listbox"
          aria-expanded="false"
          data-headlessui-state=""
          onClick={() => setVisible(!isVisible)}
        >
          <UserIcon />
          <span className="flex truncate items-center text-sm md:text-15px font-medium pl-2.5 pr-2.5 relative">
            Módulos de cuenta
          </span>
          <span className="absolute inset-y-0 flex items-center pointer-events-none right-4 md:right-5">
            <ArrowToBottomIcon />
          </span>
        </button>
        {isVisible && (
          <ul
            className="absolute bg-white z-20 w-full py-2.5 mt-1.5 overflow-auto rounded-md shadow-dropDown max-h-72 focus:outline-none text-sm md:text-15px shadow"
            aria-labelledby="headlessui-listbox-button-:rt:"
            aria-orientation="vertical"
            id="headlessui-listbox-options-:r2d:"
            role="listbox"
            tabindex="0"
            data-headlessui-state="open"
          >
            <Routes />
          </ul>
        )}
      </div>
    </div>
  )
}
