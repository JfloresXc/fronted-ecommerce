'use client'

import CartValueAddOrRest from '@/components/cart/CartValueAddOrRest'
import FormOrder from '@/components/form/FormOrder'
import Section from '@/components/section'
import { useCart } from '@/hooks/useCart'

export default function PageCaterory() {
  const { getTotal, removeOfCart, products } = useCart()

  const removeProduct = ({ id }) => {
    removeOfCart({ idProduct: id })
  }

  return (
    <Section>
      <div className="flex h-full flex-row flex-wrap bg-white shadow-xl">
        <div className="flex-1 px-6 py-6 sm:px-6 overflow-y-auto">
          <div className="flex items-start justify-between">
            <h1 className="text-xl font-medium text-gray-900">Mi pedido</h1>
          </div>

          <div className="mt-8">
            <div className="flow-root">
              <ul
                role="list"
                className="pr-6 divide-y divide-gray-200 overflow-y-scroll max-h-80"
              >
                {products.map((product) => (
                  <li key={product.id} className="flex py-6">
                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                      <img
                        src={product.urlImage}
                        alt={product.name}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>

                    <div className="ml-4 flex flex-1 flex-col">
                      <div>
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <h3>
                            <a href={product.href}>{product.name}</a>
                          </h3>
                          <p className="ml-4">S/{product.price}</p>
                        </div>
                        <p className="mt-1 text-sm text-gray-500">
                          {product.color}
                        </p>
                      </div>
                      <div className="flex flex-1 items-end justify-between text-sm">
                        <p className="text-gray-500">
                          <span className="text-xs">Cantidad</span>
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
                            onClick={() => removeProduct({ id: product.id })}
                          >
                            Eliminar
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

        <div className=" border-gray-200 mx-6 p-6 sm:px-6">
          <div className="flex justify-between text-base font-medium text-gray-900">
            <p>Subtotal</p>
            <h1 className="text-xl mr-6">S/{getTotal()}</h1>
          </div>
          <p className="mt-0.5 text-sm text-gray-500">
            Envío calculado al momento de realizar tu pedido.
          </p>
        </div>
      </div>
      <div className="flex w-full p-6 bg-white border-t">
        <FormOrder />
      </div>
    </Section>
  )
}
