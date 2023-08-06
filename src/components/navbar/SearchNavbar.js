'use client'

import { Disclosure } from '@headlessui/react'
import { UserCircleIcon } from '@heroicons/react/24/outline'
import SearchInput from '@/components/form/SearchInput'
import Brand from '@/components/brand'
import Link from 'next/link'

const navigation = [
  // { name: 'Ofertas', href: '/about', current: true },
  // { name: 'FAQ', href: '#', current: false },
  // { name: 'Contacto', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function SearchNavbar() {
  return (
    <Disclosure as="nav" className="bg-slate-50 drop-shadow-sm">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-5 py-1 ">
            <div className="relative flex h-20 items-center justify-between ">
              <div className="relative inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                {/* <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white mr-3">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button> */}
              </div>
              <div className="flex items-center justify-between gap-5 w-full h-16 py-3 top-bar lg:h-auto mx-auto max-w-[1920px]">
                <div className="max-w-[110px] text-center">
                  <Brand />
                </div>
                <SearchInput />
                <div className="hidden sm:block ml-auto mt-1.5">
                  <div className="flex space-x-4 align-center">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? '' : '',
                          'text-gray-800 rounded-md px-3 py-2 text-sm font-short hover:text-primary'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="relative inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <Link
                  href="/login"
                  className="p-1 text-gray-400 hover:text-primary focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <UserCircleIcon className="h-8 w-8" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden absolute w-full bg-slate-50 shadow">
            <div className="space-y-1 px-2 pb-3 ">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? 'bg-primary text-white'
                      : 'text-gray-800 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-sm '
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
