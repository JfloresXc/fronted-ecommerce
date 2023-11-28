import Image from 'next/image'
import { AddIcon, RestIcon } from '../icons'
import Link from 'next/link'
import { useCart } from '@/hooks/useCart'
import React from 'react'

function CartValueForm({
  quantity,
  handleClickAddProductToCart,
  handleClickRestProductToCart,
}) {
  return (
    <div class="block  bg-gray-300 rounded text-white">
      <div class="flex items-center justify-between  overflow-hidden shrink-0 md:h-8  rounded-3xl w-30 h-10">
        <button
          class="inline-flex items-center justify-center w-8 h-8 text-4xl  bg-gray-300 hover:bg-primary lg:w-10 lg:h-10 text-white focus:outline-none focus-visible:outline-none z-10"
          onClick={handleClickRestProductToCart}
        >
          <span class="sr-only">button-minus</span>
          <RestIcon />
        </button>
        <span class="font-semibold text-brand-dark flex items-center justify-center h-full transition-colors duration-250 ease-in-out cursor-default shrink-0 text-sm md:text-base w-6">
          {quantity}
        </span>
        <button
          class="inline-flex items-center justify-center w-8 h-8 text-4xl  bg-gray-300 hover:bg-primary lg:w-10 lg:h-10 text-white focus:outline-none focus-visible:outline-none z-10"
          onClick={handleClickAddProductToCart}
        >
          <span class="sr-only">button-plus</span>
          <AddIcon />
        </button>
      </div>
    </div>
  )
}

function CardProduct({
  id,
  name = '',
  code,
  price,
  priceBefore = 0,
  category,
  images = [],
}) {
  const urlImage = images[0]?.url || '/storage/no-image-placeholder.png'

  const { addToCart, restToCart, findProduct } = useCart()

  const handleClickAddProductToCart = (event) => {
    event.preventDefault()
    addToCart({ id, name, price, urlImage })
  }

  const handleClickRestProductToCart = (event) => {
    event.preventDefault()
    restToCart({ id, name, price, urlImage })
  }

  return (
    <>
      <Link
        href={'/product-detail/' + id}
        className="flex flex-col shadow group overflow-hidden rounded-md cursor-pointer transition-all duration-300 shadow-card hover:shadow-cardHover relative h-full"
      >
        <div className="relative shrink-0">
          <div className="overflow-hidden mx-auto w-full sm:w-[180px] h-[180px] md:w-[200px] md:h-[200px] transition duration-200 ease-in-out transform group-hover:scale-105 relative">
            <Image
              src={urlImage}
              alt="Producto"
              width={750}
              height={500}
              quality={75}
            />
          </div>
          <div className="w-full h-full absolute top-0 left-4 pt-2.5 md:pt-3.5 px-3 md:px-4 lg:px-[18px] z-10 -mx-0.5 sm:-mx-1">
            {/* <div className="block product-count-button-position">
              <button
                className="inline-flex items-center justify-center w-8 h-8 text-4xl rounded-full bg-primary hover:bg-secondary lg:w-10 lg:h-10 text-white focus:outline-none focus-visible:outline-none"
                aria-label="Count Button"
              >
                <CheckCircleIcon />
              </button>
            </div> */}
            <div className="block product-count-button-position">
              {findProduct(id) <= 0 ? (
                <button
                  className="inline-flex items-center justify-center w-8 h-8 text-4xl rounded-full bg-gray-300 hover:bg-primary lg:w-10 lg:h-10 text-white focus:outline-none focus-visible:outline-none relative z-2"
                  onClick={handleClickAddProductToCart}
                  type="button"
                >
                  <AddIcon />
                </button>
              ) : (
                <CartValueForm
                  quantity={findProduct(id)}
                  handleClickAddProductToCart={handleClickAddProductToCart}
                  handleClickRestProductToCart={handleClickRestProductToCart}
                />
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-col px-3 md:px-4 lg:px-[18px] pb-5 lg:pb-6 lg:pt-1.5 mt-3 h-full">
          <div className="mb-1 lg:mb-1.5 -mx-1">
            <span className="inline-block mx-1 text-sm font-semibold sm:text-15px lg:text-base text-brand-dark">
              S/.{price}
              <span className="ml-2 text-xs text-gray-600">
                {priceBefore > 0 && <del>S/.{priceBefore}</del>}
              </span>
            </span>
          </div>
          <h2 className="text-brand-dark text-13px sm:text-sm lg:text-15px leading-5 sm:leading-6 mb-1.5 ">
            {name}
          </h2>
          <div className="mt-auto text-13px sm:text-sm">1 Bag</div>
        </div>
      </Link>
      <style jsx>{`
        .product-count-button-position {
          position: absolute;
          bottom: -1.3rem;
          display: flex;
          justify-content: center;
          right: 30px;
        }
      `}</style>
    </>
  )
}

export default React.memo(CardProduct)
