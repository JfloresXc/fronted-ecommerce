'use client'

import { useFamilies } from '@/hooks/useFamilies'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { useEffect, useState } from 'react'
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const MenuItem = ({ family: { id, name = '', categories = [] } }) => {
  return (
    <>
      <div className="relative py-3 mx-3 cursor-pointer menuItem group xl:mx-4">
        <Link
          className="relative inline-flex items-center pt-2 pb-2.5  text-sm font-normal lg:text-15px text-dark group-hover:text-secondary before:absolute before:w-0 before:right-0 left-0 before:bg-primary before:h-[3px] before:transition-all before:duration-300 before:-bottom-[14px] group-hover:before:w-full group-hover:before:right-auto group-hover:before:left-auto "
          href={`/product-family/${id}`}
        >
          {name}
          <span className="text-xs mt-1 xl:mt-0.5 w-4 flex justify-end text-dark opacity-40 group-hover:text-primary">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 448 512"
              className="transition duration-300 ease-in-out transform group-hover:-rotate-180"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
            </svg>
          </span>
        </Link>
        <div className="absolute opacity-0 subMenu shadow transition-opacity duration-300 invisible bg-primary-light left-0 right-0 top-16 w-[220px] xl:w-[240px] group-hover:opacity-100 group-hover:visible z-20">
          <ul className="py-5 text-sm text-muted bg-white z-20">
            {categories.map((category, index) => (
              <li className="relative" key={index}>
                <Link
                  className="flex items-center justify-between py-2 pr-3 pl-3 xl:pr-3.5 xl:pl-3.5 hover:bg-slate-100 hover:text-primary"
                  href={`/product-category/${category?.id}`}
                >
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default function CollectionsNavbar() {
  const [families, setFamilies] = useState([])
  const { getActivedFamilies } = useFamilies()

  useEffect(() => {
    getActivedFamilies().then((familiesData) => {
      setFamilies(familiesData)
    })
  }, [])

  return (
    <Disclosure as="nav" className="bg-slate-100 drop-shadow-sm z-20 relative">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-5 py-1 z-20 ">
            <div className="relative flex h-20 items-center justify-between ">
              <div className="relative inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white mr-3">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex items-center  gap-5 w-full h-16 py-3 top-bar lg:h-auto mx-auto max-w-[1920px]">
                {families?.map((family, index) => (
                  <MenuItem family={family} key={index} />
                ))}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden absolute w-full bg-slate-50 shadow">
            <div className="space-y-1 px-2 pb-3 ">
              {families?.map((item) => (
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
