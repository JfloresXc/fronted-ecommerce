'use client'

import Link from 'next/link'
import { ROUTES } from '@/utils/routes'
import { usePathname } from 'next/navigation'

export default function Routes() {
  const pathname = usePathname()

  return (
    <>
      {ROUTES.map(({ href, title, icon }, index) => (
        <div
          key={index}
          className={`${
            pathname === href ? 'bg-gray-100' : ''
          } hover:bg-gray-200`}
        >
          <Link
            className="flex items-center cursor-pointer text-sm lg:text-15px text-brand-dark py-3.5 px-3.5 xl:px-4 2xl:px-5 mb-1 bg-fill-base font-medium"
            href={href}
          >
            <span className={`w-9 xl:w-10 shrink-0 flex justify-center`}>
              <div className="w-5 md:w-[22px] h-5 md:h-[22px]">{icon}</div>
            </span>
            <span className="ltr:pl-1 lg:rtl:pr-1.5">{title}</span>
          </Link>
        </div>
      ))}
    </>
  )
}
