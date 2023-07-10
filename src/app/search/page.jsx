'use client'

import Filters from '@/components/products/Filters'
import ListOfProducts from '@/components/products/List'
import SelectFilter from '@/components/products/SelectFilter'
import { useProductFilters } from '@/hooks/useProductFilters'
import { useProductsForClient } from '@/hooks/useProductsForClient'
import { useForm } from 'react-hook-form'

function SectionFilters() {
  return (
    <div className="sticky hidden h-full lg:pt-4 shrink-0 pr-8 xl:pr-16 lg:block w-80 xl:w-96 top-16">
      <div className="space-y-10">
        <Filters />
      </div>
    </div>
  )
}

function Page() {
  const { products } = useProductsForClient()
  const { filterProducts, setFilters } = useProductFilters()
  const filteredProducts = filterProducts(products)
  const { register } = useForm({ mode: 'onChange' })
  // const searchParams = useSearchParams()
  // const search = searchParams.get('id')

  const handleChangeMinPrice = (event) => {
    setFilters((prevState) => {
      return {
        ...prevState,
        minPrice: event.target.value,
      }
    })
  }

  return (
    <div className="mx-auto max-w-[1920px] px-4 md:px-6 lg:px-8 2xl:px-10">
      <div className="flex pb-16 pt-7 lg:pt-7 lg:pb-20 sm:p-5 lg:py-8 2xl:py-10 lg:px-7 2xl:px-12">
        <SectionFilters />
        <div className="w-full">
          <div className="flex flex-col mb-6">
            <button className="flex items-center px-4 py-2 text-sm font-semibold transition duration-200 ease-in-out border rounded-md lg:hidden text-brand-dark border-border-base focus:outline-none hover:border-brand hover:text-brand">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18px"
                height="14px"
                viewBox="0 0 18 14"
              >
                <g
                  id="Group_36196"
                  data-name="Group 36196"
                  transform="translate(-925 -1122.489)"
                >
                  <path
                    id="Path_22590"
                    data-name="Path 22590"
                    d="M942.581,1295.564H925.419c-.231,0-.419-.336-.419-.75s.187-.75.419-.75h17.163c.231,0,.419.336.419.75S942.813,1295.564,942.581,1295.564Z"
                    transform="translate(0 -169.575)"
                    fill="currentColor"
                  ></path>
                  <path
                    id="Path_22591"
                    data-name="Path 22591"
                    d="M942.581,1951.5H925.419c-.231,0-.419-.336-.419-.75s.187-.75.419-.75h17.163c.231,0,.419.336.419.75S942.813,1951.5,942.581,1951.5Z"
                    transform="translate(0 -816.512)"
                    fill="currentColor"
                  ></path>
                  <path
                    id="Path_22593"
                    data-name="Path 22593"
                    d="M1163.713,1122.489a2.5,2.5,0,1,0,1.768.732A2.483,2.483,0,0,0,1163.713,1122.489Z"
                    transform="translate(-233.213)"
                    fill="currentColor"
                  ></path>
                  <path
                    id="Path_22594"
                    data-name="Path 22594"
                    d="M2344.886,1779.157a2.5,2.5,0,1,0,.731,1.768A2.488,2.488,0,0,0,2344.886,1779.157Z"
                    transform="translate(-1405.617 -646.936)"
                    fill="currentColor"
                  ></path>
                </g>
              </svg>
              <span className="pl-2.5 pr-2.5">Filtros</span>
            </button>
            <div className="flex items-center w-full lg:justify-between ">
              <div className="shrink-0 text-dark font-medium text-[15px] leading-4 md:mr-6  hidden lg:block mt-0.5">
                {filteredProducts?.length} Productos encontrados
              </div>
              <div className="relative ml-2 mr-2 lg:ml-0 lg:mr-0 min-w-[160px]">
                <div className="flex items-center">
                  <div className="shrink-0 text-[15px] mr-2 ml-2 text-dark text-opacity-70">
                    Ordenado por:
                  </div>
                  <SelectFilter
                    validations={{
                      ...register('idCategory', {
                        onChange: handleChangeMinPrice,
                      }),
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <ListOfProducts products={filteredProducts} />
        </div>
      </div>
    </div>
  )
}

export default Page
