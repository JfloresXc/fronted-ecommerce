'use client'

import { Disclosure } from '@headlessui/react'
import Brand from '@/components/brand'
import DropdownUser from '../dropdown/DropdownUser'

export default function ClientNavbar() {
  return (
    <Disclosure as="nav" className="bg-slate-50 drop-shadow-sm z-20 relative">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-5 py-1">
            <div className="relative flex h-20 items-center justify-between z-50">
              <div className="max-w-[110px] text-center">
                <Brand />
              </div>

              <div className="relative inset-y-0 right-0 flex items-center sm:static sm:inset-auto sm:ml-6 sm:pr-0 z-50">
                <DropdownUser />
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  )
}
