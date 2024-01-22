'use client'

import { useEffect, useState } from 'react'
import Section from '@/components/section'
import useProductDetail from '@/hooks/useProductDetail'
import Galery from '@/components/images/Galery'
import Button from '@/components/button'

const DEFAULT_PRODUCT = {
  name: '',
  code: '',
  price: 0,
  priceBefore: 0,
  category: '',
  images: [],
}

export default function Page({ params }) {
  const [product, setProduct] = useState(DEFAULT_PRODUCT)
  const { name, price, priceBefore, images } = product
  const { id = '-1' } = params
  const { getOneProductDetail } = useProductDetail()

  useEffect(() => {
    getOneProductDetail({ id }).then((product) => {
      setProduct(product)
    })
  }, [])

  return (
    <Section>
      <div className="grid-cols-10 lg:grid gap-7 2xl:gap-8">
        <div className="col-span-5 mb-6 overflow-hidden xl:col-span-6 md:mb-8 lg:mb-0">
          <Galery images={images} />
        </div>
        <div className="flex flex-col col-span-5 shrink-0 xl:col-span-4 xl:ltr:pl-2 xl:rtl:pr-2">
          <div className="pb-3 lg:pb-5">
            <div className="md:mb-2.5 block -mt-1.5">
              <h2 className="text-lg font-medium transition-colors duration-300 text-brand-dark md:text-xl xl:text-2xl">
                {name}
              </h2>
            </div>
            <div className="flex items-center mt-5">
              <div className="text-brand-dark font-bold text-base md:text-xl xl:text-[22px]">
                <span className="inline-block mx-1 text-sm font-semibold sm:text-15px lg:text-base text-brand-dark">
                  S/.{price}
                  <span className="ml-2 text-xs text-gray-600">
                    {priceBefore > 0 && <del>S/.{priceBefore}</del>}
                  </span>
                </span>
              </div>
              {/* <button>Hello</button> */}
            </div>
            <div className="mt-3">
              <Button label={'COMPRAR'} width="300px" />
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
