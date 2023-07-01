import Image from 'next/image'
import { AddIcon } from '../icons'

export default function CardProduct() {
  return (
    <>
      <article
        className="flex flex-col shadow group overflow-hidden rounded-md cursor-pointer transition-all duration-300 shadow-card hover:shadow-cardHover relative h-full"
        title="Fresh Express Iceberg Garden Salad Blend"
      >
        <div className="relative shrink-0">
          <div className="overflow-hidden mx-auto w-full sm:w-[180px] h-[180px] md:w-[200px] md:h-[200px] transition duration-200 ease-in-out transform group-hover:scale-105 relative">
            <Image
              src="/storage/sarten.webp"
              alt="Producto"
              width={750}
              height={500}
              quality={75}
            />
          </div>
          <div className="w-full h-full absolute top-0 pt-2.5 md:pt-3.5 px-3 md:px-4 lg:px-[18px] z-10 -mx-0.5 sm:-mx-1">
            <div className="block product-count-button-position">
              <button
                className="inline-flex items-center justify-center w-8 h-8 text-4xl rounded-full bg-primary lg:w-10 lg:h-10 text-white focus:outline-none focus-visible:outline-none"
                aria-label="Count Button"
              >
                <AddIcon />
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col px-3 md:px-4 lg:px-[18px] pb-5 lg:pb-6 lg:pt-1.5 h-full">
          <div className="mb-1 lg:mb-1.5 -mx-1">
            <span className="inline-block mx-1 text-sm font-semibold sm:text-15px lg:text-base text-brand-dark">
              $25.00 - $40.00
            </span>
          </div>
          <h2 className="text-brand-dark text-13px sm:text-sm lg:text-15px leading-5 sm:leading-6 mb-1.5">
            Fresh Express Iceberg Garden Salad Blend
          </h2>
          <div className="mt-auto text-13px sm:text-sm">1 Bag</div>
        </div>
      </article>
      <style jsx>{`
        .product-count-button-position {
          position: absolute;
          bottom: 0.75rem;
          display: flex;
          width: 100%;
          justify-content: center;
          padding-left: 0.625rem;
          padding-right: 0.625rem;
        }
      `}</style>
    </>
  )
}
