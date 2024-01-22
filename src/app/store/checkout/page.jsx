'use client'

import FormOrder from '@/components/form/FormOrder'
import Section from '@/components/section'
import { useCart } from '@/hooks/useCart'

export default function PageCheckout() {
  const { getTotal, products } = useCart()

  return (
    <Section>
      <div className="py-10 2xl:py-12  mx-auto max-w-[1920px]">
        <div className="flex flex-col mx-auto xl:max-w-screen-xl">
          <div className="flex flex-col flex-wrap grid-cols-1 gap-x-7 xl:gap-x-8 lg:grid lg:grid-cols-12">
            <div className="w-full col-start-1 col-end-9 border rounded-md border-border-base p-8 pb-6 ">
              <FormOrder />
            </div>
            <div className="w-full col-start-9 col-end-13 mt-7 lg:mt-0">
              <div className="px-4 pt-4 border rounded-md border-border-base text-brand-light p-8 pb-6 ">
                <div className="flex justify-between pb-2 text-sm font-semibold rounded-md">
                  <span className="font-medium text-15px">Productos</span>
                  <span className="font-medium ml-auto shrink-0 text-15px">
                    Subtotal
                  </span>
                </div>
                <div>
                  {products.map((product, index) => (
                    <div
                      className="flex items-center py-4 border-b border-border-base"
                      key={index}
                    >
                      <div className="flex w-8 h-8 border rounded-md border-border-base shrink-0">
                        <img
                          src={product.urlImage}
                          alt={product.name}
                          className="w-full h-full rounded-md object-cover object-center"
                        />
                      </div>
                      <h6 className="font-light text-sm pl-3 pr-3">
                        <span className="font-bold">{product.quantity}</span> x{' '}
                        {product.name}
                      </h6>
                      <div className="flex font-light ml-auto text-sm  shrink-0">
                        S/.
                        {parseFloat(product.price * product.quantity).toFixed(
                          2
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                {/* <div className="flex items-center w-full py-4 text-sm font-medium border-b lg:py-5 border-border-base text-15px last:border-b-0 last:text-base last:pb-0">
                  Subtotal
                  <span className="font-normal ml-auto  text-15px">S/.5.00</span>
                </div>
                <div className="flex items-center w-full py-4 text-sm font-medium border-b lg:py-5 border-border-base text-15px last:border-b-0 last:text-base last:pb-0">
                  Shipping
                  <span className="font-normal ml-auto shrink-0 text-15px">
                    S/.0
                  </span>
                </div> */}
                <div className=" flex items-center w-full py-4 text-sm font-medium border-b lg:py-5 border-border-base text-15px last:border-b-0 last:text-base last:pb-0">
                  Total
                  <span className="font-normal ml-auto shrink-0 text-15px">
                    S/.{getTotal()}
                  </span>
                </div>
              </div>
              <p className="text-brand-muted text-sm leading-7 lg:leading-[27px] lg:text-15px mt-8">
                By placing your order, you agree to be bound by the BoroBazar{' '}
                <a
                  className="font-medium underline text-brand"
                  href="/en/terms"
                >
                  Terms of Service{' '}
                </a>
                and{' '}
                <a
                  className="font-medium underline text-brand"
                  href="/en/privacy"
                >
                  Privacy
                </a>
                . Your credit/debit card data will not saved.
              </p>
              <p className="text-brand-muted text-sm leading-7 lg:leading-[27px] lg:text-15px mt-4">
                A bag fee may be added to your final total if required by law or
                the retailer. The fee will be visible on your receipt after
                delivery.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
