'use client'

import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ShoppingBagIcon } from '@heroicons/react/24/solid'
import { useCart } from '@/hooks/useCart'
import Link from 'next/link'
import CartValueAddOrRest from './CartValueAddOrRest'
import { TrashIcon } from '../icons'
import { usePathname } from 'next/navigation'

function ButtonFloat({ showCart, total }) {
  const showProducts = (event) => {
    event.preventDefault()
    showCart()
  }

  return (
    <button
      className="
        cursor-pointer fixed top-2/4 right-0 z-10
        px-3 py-4 rounded-l-lg 
        flex flex-col justify-items-center items-center gap-2 
        transition ease-in-out delay-150 
        bg-primary hover:bg-secondary 
      "
      onClick={showProducts}
      type="button"
    >
      <div className="flex gap-1 mb-2">
        <ShoppingBagIcon className="h-4 w-4 text-white font-bold" />
        <span className="text-white font-semibold text-sm">Carrito</span>
      </div>
      <div
        className="inline-block text-center text-primary font-semibold px-2 py-2 bg-white focus:ring-4 focus:ring-blue-300 rounded-lg text-xs  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800
        w-[75px]"
      >
        S/.{total}
      </div>
    </button>
  )
}

function Cart() {
  const [open, setOpen] = useState(false)
  const { getTotal, removeOfCart, products } = useCart()

  const removeProduct = ({ id }) => {
    removeOfCart({ idProduct: id })
  }

  return (
    <>
      <ButtonFloat showCart={() => setOpen(true)} total={getTotal()} />
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="z-30" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed z-10 inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed z-10 inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed z-9 inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                    <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                      <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                        <div className="flex items-start justify-between">
                          <Dialog.Title className="text-lg font-medium text-gray-900">
                            Carrito de compras
                          </Dialog.Title>
                          <div className="ml-3 flex h-7 items-center">
                            <button
                              type="button"
                              className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                              onClick={() => setOpen(false)}
                            >
                              <span className="sr-only">Close panel</span>
                              <XMarkIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            </button>
                          </div>
                        </div>

                        <div className="mt-8">
                          <div className="flow-root">
                            <ul
                              role="list"
                              className="-my-6 divide-y divide-gray-200"
                            >
                              {products.map((product) => (
                                <li
                                  key={product.id}
                                  className="py-6 flex items-center gap-x-2"
                                >
                                  <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                    <img
                                      src={product.urlImage}
                                      alt={product.name}
                                      className="h-full w-full object-cover object-center"
                                    />
                                  </div>

                                  <div className="ml-4 flex flex-1 flex-col">
                                    <div>
                                      <div className="flex justify-between text-base font-medium text-gray-900">
                                        <h3 className="text-sm">
                                          {product.name}
                                        </h3>
                                        <p className="ml-4 text-base">
                                          S/{product.price}
                                        </p>
                                      </div>
                                      <p className="mt-1 text-sm text-gray-500">
                                        {product.color}
                                      </p>
                                    </div>
                                    <div className="flex flex-1 items-end justify-between text-sm">
                                      <p className="text-gray-500">
                                        <span className="text-xs">
                                          Cantidad
                                        </span>
                                        <CartValueAddOrRest
                                          id={product.id}
                                          name={product.name}
                                          price={product.price}
                                          urlImage={product.urlImage}
                                        />
                                      </p>

                                      <div className="flex">
                                        <button
                                          type="button"
                                          className="font-medium text-indigo-600 hover:text-indigo-500"
                                          onClick={() =>
                                            removeProduct({ id: product.id })
                                          }
                                        >
                                          <TrashIcon className={'w-5 y-5'} />
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <p>Subtotal</p>
                          <p>S/{getTotal()}</p>
                        </div>
                        <p className="mt-0.5 text-sm text-gray-500">
                          Envío calculado al momento de pagar.
                        </p>
                        <div className="mt-6">
                          <Link
                            href="store/checkout"
                            className="flex items-center justify-center rounded-md border border-transparent bg-primary px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-secondary"
                            onClick={() => setOpen(false)}
                          >
                            Comprar ahora
                          </Link>
                        </div>
                        <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                          <p>
                            o{' '}
                            <button
                              type="button"
                              className="font-medium text-indigo-600 hover:text-indigo-500"
                              onClick={() => setOpen(false)}
                            >
                              Continuar comprando
                              <span aria-hidden="true"> &rarr;</span>
                            </button>
                          </p>
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  )
}

const PAGES_WHITOUT_CART = ['/store/checkout', '/store/complete-order']

export default function CartComponent() {
  const pathName = usePathname()

  if (PAGES_WHITOUT_CART.includes(pathName)) {
    return <></>
  }

  return <Cart />
}
