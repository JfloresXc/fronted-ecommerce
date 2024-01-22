export default function CompleteOrder({ id }) {
  return (
    <div className="mx-auto max-w-[1920px] px-4 md:px-6 lg:px-8 2xl:px-10">
      <div className="py-16 xl:px-32 2xl:px-44 3xl:px-56 lg:py-20">
        <div className="flex items-center justify-start px-4 py-4 mb-6 text-sm border rounded-md border-border-base bg-fill-secondary lg:px-5 text-brand-dark md:text-base lg:mb-8">
          <span className="flex items-center justify-center w-10 h-10 rounded-full mr-3 ml-3 lg:mr-4 lg:ml-4 bg-brand bg-opacity-20 shrink-0">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              className="w-5 h-5 text-brand"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm108.25 138.29l-134.4 160a16 16 0 01-12 5.71h-.27a16 16 0 01-11.89-5.3l-57.6-64a16 16 0 1123.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0124.5 20.58z"></path>
            </svg>
          </span>
          Gracias. Su pedido ha sido recibido.
        </div>
        <ul className="flex flex-col border rounded-md border-border-base bg-fill-secondary md:flex-row mb-7 lg:mb-8 xl:mb-10">
          <li className="px-4 py-4 text-base font-semibold border-b border-dashed text-brand-dark lg:text-lg md:border-b-0 md:border-r border-border-two lg:px-6 xl:px-8 md:py-5 lg:py-6 last:border-0">
            <span className="block text-xs font-normal leading-5 uppercase text-brand-muted">
              Order number:
            </span>
            XRQ4567
          </li>
          <li className="px-4 py-4 text-base font-semibold border-b border-gray-300 border-dashed text-brand-dark lg:text-lg md:border-b-0 md:border-r lg:px-6 xl:px-8 md:py-5 lg:py-6 last:border-0">
            <span className="uppercase text-[11px] block text-brand-muted font-normal leading-5">
              Date:
            </span>
            April 22, 2021
          </li>
          <li className="px-4 py-4 text-base font-semibold border-b border-gray-300 border-dashed text-brand-dark lg:text-lg md:border-b-0 md:border-r lg:px-6 xl:px-8 md:py-5 lg:py-6 last:border-0">
            <span className="uppercase text-[11px] block text-brand-muted font-normal leading-5">
              Send Mail:
            </span>
            customer@demo.com
          </li>
          <li className="px-4 py-4 text-base font-semibold border-b border-gray-300 border-dashed text-brand-dark lg:text-lg md:border-b-0 md:border-r lg:px-6 xl:px-8 md:py-5 lg:py-6 last:border-0">
            <span className="uppercase text-[11px] block text-brand-muted font-normal leading-5">
              Total:
            </span>
            $149.00
          </li>
          <li className="px-4 py-4 text-base font-semibold border-b border-gray-300 border-dashed text-brand-dark lg:text-lg md:border-b-0 md:border-r lg:px-6 xl:px-8 md:py-5 lg:py-6 last:border-0">
            <span className="uppercase text-[11px] block text-brand-muted font-normal leading-5">
              Payment method:
            </span>
            cash on delivery
          </li>
        </ul>
        <p className="mb-8 text-sm text-brand-dark md:text-base">
          Pay with cash upon delivery.
        </p>
        <div className="pt-10 lg:pt-12">
          <h2 className="text-brand-dark text-lg lg:text-xl xl:text-[22px] xl:leading-8 font-bold font-manrope mb-6 xl:mb-7">
            Order details:
          </h2>
          <table className="w-full text-sm font-semibold text-brand-dark lg:text-base">
            <thead>
              <tr>
                <th className="w-1/2 p-4 bg-fill-secondary text-left text-right first:rounded-tl-md first:rounded-tr-md">
                  Product
                </th>
                <th className="w-1/2 p-4 bg-fill-secondary text-left text-right last:rounded-tr-md last:rounded-tl-md">
                  Total
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="font-normal border-b border-border-base last:border-b-0">
                <td className="p-4">Fresh Green Leaf Lettuce * 10</td>
                <td className="p-4">$50.00</td>
              </tr>
              <tr className="font-normal border-b border-border-base last:border-b-0">
                <td className="p-4">Leafy Romaine Mixed Lettuce * 10</td>
                <td className="p-4">$150.00</td>
              </tr>
              <tr className="font-normal border-b border-border-base last:border-b-0">
                <td className="p-4">Organic Girl Lettuce * 5</td>
                <td className="p-4">$125.00</td>
              </tr>
              <tr className="font-normal border-b border-border-base last:border-b-0">
                <td className="p-4">
                  Organic Firm Fresh White Lettuce - 36oz * 10
                </td>
                <td className="p-4">$350.00</td>
              </tr>
            </tbody>
            <tfoot>
              <tr className="odd:bg-fill-secondary">
                <td className="p-4 italic">Subtotal:</td>
                <td className="p-4">$132.00</td>
              </tr>
              <tr className="odd:bg-fill-secondary">
                <td className="p-4 italic">Shipping:</td>
                <td className="p-4">
                  $17.00
                  <span className="text-[13px] font-normal pl-1.5 pr-1.5 inline-block">
                    via Flat rate
                  </span>
                </td>
              </tr>
              <tr className="odd:bg-fill-secondary">
                <td className="p-4 italic">Payment method:</td>
                <td className="p-4">cash on delivery</td>
              </tr>
              <tr className="odd:bg-fill-secondary">
                <td className="p-4 italic">Total:</td>
                <td className="p-4">$149.00</td>
              </tr>
              <tr className="odd:bg-fill-secondary">
                <td className="p-4 italic">Note:</td>
                <td className="p-4">new order</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  )
}
