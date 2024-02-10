'use client'

import { useEffect, useState } from 'react'
import { useFamilies } from '@/hooks/useFamilies'
import { Disclosure } from '@headlessui/react'
import SidebarCollections from '../sidebar/SidebarCollections'
import MenuItemCollection from './MenuItemCollection'

import Link from 'next/link'
const LINKS = [
  // { name: 'Ofertas', href: '/about', current: true },
  // { name: 'FAQ', href: '#', current: false },
  { name: 'Contacto', href: '/store/contact', current: false },
]

export default function CollectionsNavbar() {
  const [families, setFamilies] = useState([])
  const { getActivedFamilies } = useFamilies()

  useEffect(() => {
    getActivedFamilies().then((familiesData) => {
      setFamilies(familiesData)
    })
  }, [])

  return (
    <Disclosure as="nav" className="bg-white shadow relative">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-5 z-20 flex justify-between items-center">
            <div className="relative flex items-center justify-between py-1.5 min-h-[65px]">
              <SidebarCollections families={families} />
              <div className="hidden md:flex items-center gap-5 w-full lg:h-auto mx-auto max-w-[1920px]">
                {families?.map((family, index) => (
                  <MenuItemCollection family={family} key={index} />
                ))}
              </div>
            </div>
            <div>
              <ul className="flex space-x-6 md:space-x-12 align-center">
                {LINKS.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={
                      'text-gray-800 py-2 text-xs md:text-sm font-short hover:text-gray-500 border-b-2 border-green-500 hover:border-gray-500 '
                    }
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  )
}
