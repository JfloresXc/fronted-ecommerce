'use client'

import { useEffect, useState } from 'react'
import Section from '@/components/section'
import useProductDetail from '@/hooks/useProductDetail'
import Galery from '@/components/images/Galery'
import Button from '@/components/button'
import StarIcon from '@/components/icons/Star'
import Link from 'next/link'
import { useCart } from '@/hooks/useCart'
import Breadcrumb from '@/components/breadcrumb/Breadcrumb'

const DEFAULT_PRODUCT = {
  id: -1,
  name: '',
  code: '',
  price: 0,
  priceBefore: 0,
  category: '',
  images: [],
}

export default function Page({ params }) {
  const [product, setProduct] = useState(DEFAULT_PRODUCT)
  const {
    id: idProduct,
    name,
    price,
    priceBefore,
    images,
    rating = 5,
    category,
    description,
  } = product
  const { id = '-1' } = params
  const { getOneProductDetail } = useProductDetail()
  const { addToCart } = useCart()

  useEffect(() => {
    getOneProductDetail({ id }).then((product) => {
      if (!product || !product.id)
        return setProduct({ ...DEFAULT_PRODUCT, id: -2 })
      setProduct(product)
    })
  }, [])

  const showRating = (numberStars) => {
    const stars = []
    for (let i = 0; i < 5; i++) {
      if (i < numberStars) {
        stars.push(
          <span key={i} className="text-yellow-400">
            <StarIcon className="w-6 h-6 " color="rgb(250 204 21)" />
          </span>
        )
      } else {
        stars.push(
          <span key={i} className="text-gray-300">
            <StarIcon className="w-6 h-6" color="rgb(209 213 219)" />
          </span>
        )
      }
    }
    return stars
  }

  if (idProduct === -2)
    return (
      <Section>
        <h1 className="text-xl md:text-2xl">Producto no encontrado ❌</h1>
      </Section>
    )

  return (
    <Section>
      <Breadcrumb
        nameOfProduct={name}
        idProduct={idProduct}
        idCategory={category?.id ?? -1}
        nameOfCategory={category?.name}
      />
      <div className="sm:grid grid-rows-2 md:grid-cols-12 gap-10 mt-3">
        <div className="sm:col-span-7 md:col-span-6 overflow-hidden mb-6 md:mb-8 lg:mb-0">
          <Galery images={images} />
        </div>
        <div className="flex flex-col sm:col-span-5 md:col-span-6 xl:px-2 mt-2">
          <div className="pb-3 lg:pb-5">
            <div className="mb-5 block">
              <Link
                href={
                  category?.id
                    ? `/store/product-category/${category?.id}`
                    : '/store'
                }
                className="text-sm duration-300 border-b-green-400 hover:text-slate-400 border-b-2 pb-1.5"
              >
                {category?.name ?? '🏠'}
              </Link>
            </div>
            <div className="mb-2.5 block">
              <h2 className="text-xl font-bold duration-300 md:text-2xl xl:text-4xl">
                {name}
              </h2>
            </div>
            <div className="mb-2.5">
              <h4 className="flex">{showRating(rating).map((star) => star)}</h4>
            </div>
            <div className="flex items-center mt-5">
              <div className=" font-bold text-base md:text-xl xl:text-[22px]">
                <span className="inline-block mx-1 text-sm font-semibold sm:text-lg lg:text-xl text-green-400">
                  S/.{price}
                  <span className="ml-2 text-xs text-gray-600">
                    {priceBefore > 0 && <del>S/.{priceBefore}</del>}
                  </span>
                </span>
              </div>
            </div>

            <div className="flex items-center mt-5">
              <p className="font-normal text-sm md:text-base w-full sm:max-w-[350px] md:max-w-[450px]">
                {description}
              </p>
            </div>
            <div className="mt-8 flex w-full">
              <Button
                label={'Agregar al carrito 🛒'}
                className="w-full  lg:py-6 mx-auto"
                handleClick={() => {
                  addToCart({ ...product, urlImage: images[0]?.url ?? '' })
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
