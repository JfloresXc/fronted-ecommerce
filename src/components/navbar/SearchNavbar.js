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
    <Disclosure
      as="nav"
      className="bg-slate-50 drop-shadow-sm sticky top-0 z-10
    "
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-5 py-1 ">
            <div className="relative h-16 flex items-center justify-between">
              <div className="w-full flex items-center justify-between gap-5 h-16 py-3 top-bar lg:h-auto">
                <div className="max-w-[150px] md:max-w-[160px] w-full text-center">
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
              <div className="pr-2 sm:pr-0 sr-only">
                <Link
                  href="/login"
                  className="text-base text-gray-400 hover:text-primary 
                  focus:outline-none 
                  flex items-center justify-center gap-x-2 min-w-[150px]"
                >
                  <UserCircleIcon className="h-6 w-6" aria-hidden="true" />
                  <span>Iniciar Sesión</span>
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
