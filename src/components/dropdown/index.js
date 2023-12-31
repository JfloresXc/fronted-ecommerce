import React, { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Dropdown({ linkEdit = '', linkDelete = '' }) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center align-center gap-x-1.5 bg-white px-3 py-2 text-sm font-semibold text-gray-900 rounded hover:bg-gray-50">
          <EllipsisVerticalIcon
            className="-mr-1 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-36 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {linkEdit && (
              <Menu.Item>
                {({ active }) => (
                  <Link
                    href={linkEdit}
                    className={classNames(
                      active ? 'bg-green-100 text-green-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    Editar
                  </Link>
                )}
              </Menu.Item>
            )}
            {linkDelete && (
              <Menu.Item>
                {({ active }) => (
                  <Link
                    href={linkDelete}
                    className={classNames(
                      active ? 'bg-red-100 text-red-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    Deshabilitar
                  </Link>
                )}
              </Menu.Item>
            )}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default React.memo(Dropdown)
