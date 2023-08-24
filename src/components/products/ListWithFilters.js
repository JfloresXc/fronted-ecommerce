import React from 'react'
import Filters from './Filters'
import ListOfProducts from '@/components/products/List'
import SelectFilterOrder from '@/components/form/SelectFilterOrder'
import Pagination from '@/components/pagination/Pagination'

function SectionFilters({ slug }) {
  return (
    <div className="sticky hidden h-full lg:pt-4 shrink-0 pr-8 xl:pr-16 lg:block w-80 xl:w-96 top-5">
      <div className="space-y-10">
        <Filters slug={slug} />
      </div>
    </div>
  )
}

export default function ListWithFilters({
  filteredProducts,
  totalPages,
  totalProducts,
  slug,
}) {
  return (
    <div className="flex">
      <SectionFilters slug={slug} />
      <div className="w-full">
        <div className="flex flex-col mb-6">
          <div className="flex items-center w-full lg:justify-between ">
            <div className="shrink-0 text-dark font-medium text-[15px] leading-4 md:mr-6  hidden lg:block mt-0.5">
              {totalProducts} Productos encontrados
            </div>
            <div className="relative ml-2 mr-2 lg:ml-0 lg:mr-0 min-w-[160px]">
              <div className="flex items-center">
                <div className="shrink-0 text-[15px] mr-2 ml-2 text-dark text-opacity-70">
                  Ordenado por:
                </div>
                <SelectFilterOrder slug={slug} />
              </div>
            </div>
          </div>
        </div>
        <ListOfProducts products={filteredProducts} />
        <div className="text-center mt-5">
          <Pagination totalPages={totalPages} slug={slug} />
        </div>
      </div>
    </div>
  )
}
