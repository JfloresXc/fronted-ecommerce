'use effect'

import { useState } from 'react'
import FiltersIcon from '../icons/Filters'
import Brand from '../brand'
import { XMarkIcon } from '@heroicons/react/24/outline'
import MenuItemCollection from '../navbar/MenuItemCollection'

export default function SidebarCollections({ families = [] }) {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <button
        type="button"
        className="md:hidden
        cursor-pointer
        py-2 px-4 rounded
        flex justify-center items-center gap-2 
        transition ease-in-out delay-150 
        bg-primary hover:bg-green-400 
        "
        onClick={() => setOpen((isOpen) => !isOpen)}
      >
        <FiltersIcon className="h-4 w-4 text-white font-bold" />
        <span className="text-white font-semibold text-xs md:text-sm">
          Filtros
        </span>
      </button>

      <div
        hidden={!open}
        className="overlay fixed inset-0 z-30 bg-black/40"
      ></div>

      <aside
        id="default-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
        aria-label="Sidebar"
      >
        <div className="w-full flex justify-between p-4 items-center bg-gray-50">
          <div className="max-w-[150px] md:max-w-[160px] w-full py-4 text-center">
            <Brand />
          </div>
          <div className="ml-3 flex h-7 items-center">
            <button
              type="button"
              className="-m-2 p-2 text-gray-400 hover:text-gray-500"
              onClick={() => setOpen(false)}
            >
              <span className="sr-only">Close panel</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
        <div className="h-full px-3 pb-4 md:py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul className="space-y-4 font-medium">
            {families?.map((family, index) => (
              <MenuItemCollection family={family} key={index} />
            ))}
          </ul>
        </div>
      </aside>
    </div>
  )
}
