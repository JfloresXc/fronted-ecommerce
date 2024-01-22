import React, { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import {
  HomeIcon,
  RectangleGroupIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline'
import ButtonLogout from '../button/ButtonLogout'
import Link from 'next/link'

function DropdownUser() {
  return (
    <>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center align-center gap-x-1.5 py-2 text-lg font-semibold text-gray-900 rounded ">
            <RectangleGroupIcon
              className="h-8 w-8 bg-primary rounded-lg  p-1 text-white hover:bg-secondary transition duration-300 ease-in-out"
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
          <Menu.Items className="items absolute right-0 z-50 mt-2 w-[200px] origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <Link
                    href={'/admin'}
                    className={`${
                      active ? 'bg-primary text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    <HomeIcon className="mr-2 h-5 w-5" aria-hidden="true" />
                    Home
                  </Link>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-primary text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    <UserCircleIcon
                      className="mr-2 h-5 w-5"
                      aria-hidden="true"
                    />
                    Perfil
                  </button>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <ButtonLogout />
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
      <style jsx>{`
        .items {
          background-color: red !important;
        }
      `}</style>
    </>
  )
}

export default React.memo(DropdownUser)
