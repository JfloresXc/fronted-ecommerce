import React from 'react'
import ArrowRight from '../icons/ArrowRight'
import { HomeIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function Breadcrumb({
  idCategory = -1,
  idProduct = -1,
  nameOfProduct,
  nameOfCategory,
}) {
  return (
    <div className="flex items-center mt-5 mb-7">
      <ol className="flex items-center w-full overflow-hidden">
        <li className="text-sm transition duration-200 ease-in pr-3">
          <Link
            className="flex items-center justify-center gap-x-1"
            href="/store"
          >
            <HomeIcon height={'15'} width={'15'} />
            Inicio
          </Link>
        </li>
        {idCategory !== -1 && (
          <>
            <li className="text-base  mt-[1px]">
              <ArrowRight className={'text-green-500'} />
            </li>
            <li className="text-xs md:text-sm px-2.5 transition duration-200 ease-in pr-3 hover:">
              <Link
                className="capitalize"
                href={decodeURI(`/store/product-category/${idCategory}}`)}
              >
                {nameOfCategory}
              </Link>
            </li>
          </>
        )}
        {idProduct !== -1 && (
          <>
            <li className="text-base  mt-[1px]">
              <ArrowRight className={'text-green-500'} />
            </li>
            <li className="text-xs md:text-sm text-primary font-semibold px-2.5 transition duration-200 ease-in pr-3 hover:">
              <Link
                className="capitalize"
                href={`/store/product-detail/${decodeURI(idProduct)}}`}
              >
                {nameOfProduct}
              </Link>
            </li>
          </>
        )}
      </ol>
    </div>
  )
}
