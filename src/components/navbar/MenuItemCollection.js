import Link from 'next/link'
import React from 'react'
import ArrowBotom from '../icons/ArrowBotom'

export default function MenuItemCollection({
  family: { id, name = '', categories = [] },
}) {
  return (
    <>
      <div className={`relative cursor-pointer menuItem group mr-4 md:py-3`}>
        <Link
          className="relative inline-flex items-center pt-2 pb-2.5  text-sm font-normal lg:text-15px text-dark group-hover:text-secondary before:absolute before:w-0 before:right-0 left-0 before:bg-primary before:h-[3px] before:transition-all before:duration-300 before:-bottom-[14px] group-hover:before:w-full group-hover:before:right-auto group-hover:before:left-auto w-full pointer-events-none md:pointer-events-auto"
          href={`/store/product-family/${id}`}
        >
          <span className="w-full">{name}</span>
          <span className="text-xs mt-1 xl:mt-0.5 w-4 flex justify-end text-dark opacity-40 group-hover:text-primary">
            <ArrowBotom />
          </span>
        </Link>
        <div className="absolute opacity-0 subMenu shadow transition-opacity duration-300 invisible bg-primary-light left-0 right-0 top-10 md:top-16 w-[220px] xl:w-[240px] group-hover:opacity-100 group-hover:visible z-20">
          <ul className=" text-sm text-muted bg-white z-20 p-3 md:py-5">
            {categories.map((category, index) => (
              <li className="relative" key={index}>
                <Link
                  className="flex items-center justify-between py-2 pr-3 pl-3 xl:pr-3.5 xl:pl-3.5 hover:bg-slate-100 hover:text-primary "
                  href={`/store/product-category/${category?.id}`}
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
