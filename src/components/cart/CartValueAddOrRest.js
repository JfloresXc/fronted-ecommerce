import { useCart } from '@/hooks/useCart'
import { AddIcon, RestIcon } from '../icons'

function ButtonAddOrRest({
  quantity,
  handleClickAddProductToCart,
  handleClickRestProductToCart,
}) {
  return (
    <div class="block  bg-gray-300 rounded-3xl text-white">
      <div class="flex items-center justify-between  overflow-hidden shrink-0 md:h-8 w-30 h-10">
        <button
          class="inline-flex items-center justify-center w-8 h-8 text-4xl bg-gray-300 hover:bg-primary lg:w-10 lg:h-10 text-white focus:outline-none focus-visible:outline-none z-10 rounded-3xl"
          onClick={handleClickRestProductToCart}
        >
          <span class="sr-only">button-minus</span>
          <RestIcon />
        </button>
        <span class="font-semibold text-brand-dark flex items-center justify-center h-full transition-colors duration-250 ease-in-out cursor-default shrink-0 text-sm md:text-base w-6">
          {quantity}
        </span>
        <button
          class="inline-flex items-center justify-center w-8 h-8 text-4xl  bg-gray-300 hover:bg-primary lg:w-10 lg:h-10 text-white focus:outline-none focus-visible:outline-none z-10 rounded-3xl"
          onClick={handleClickAddProductToCart}
        >
          <span class="sr-only">button-plus</span>
          <AddIcon />
        </button>
      </div>
    </div>
  )
}

export default function CartValueAddOrRest({ id, name, price, urlImage }) {
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
      {findProduct(id) <= 0 ? (
        <button
          className="inline-flex items-center justify-center w-8 h-8 text-4xl rounded-full bg-gray-300 hover:bg-primary lg:w-10 lg:h-10 text-white focus:outline-none focus-visible:outline-none relative z-2"
          onClick={handleClickAddProductToCart}
          type="button"
        >
          <AddIcon />
        </button>
      ) : (
        <ButtonAddOrRest
          quantity={findProduct(id)}
          handleClickAddProductToCart={handleClickAddProductToCart}
          handleClickRestProductToCart={handleClickRestProductToCart}
        />
      )}
    </>
  )
}
