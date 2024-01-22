import { useCart } from '@/hooks/useCart'
import { AddIcon, RestIcon } from '../icons'

function ButtonAddOrRest({
  quantity,
  handleClickAddProductToCart,
  handleClickRestProductToCart,
}) {
  return (
    <div className="block bg-gray-300 rounded-3xl text-white">
      <div className="flex items-center justify-between  overflow-hidden shrink-0 md:h-8 w-30 h-10">
        <button
          className="inline-flex items-center justify-center w-8 h-8 text-4xl bg-gray-300 hover:bg-secondary lg:w-8 lg:h-8 text-white focus:outline-none focus-visible:outline-none rounded-3xl"
          onClick={handleClickRestProductToCart}
        >
          <span className="sr-only">button-minus</span>
          <RestIcon className={'w-3 h-3'} />
        </button>
        <span className="font-semibold text-brand-dark flex items-center justify-center h-full transition-colors duration-250 ease-in-out cursor-default shrink-0 text-sm w-6">
          {quantity}
        </span>
        <button
          className="inline-flex items-center justify-center w-8 h-8 text-4xl  bg-gray-300 hover:bg-secondary lg:w-8 lg:h-8 text-white focus:outline-none focus-visible:outline-none rounded-3xl"
          onClick={handleClickAddProductToCart}
        >
          <span className="sr-only">button-plus</span>
          <AddIcon className={'w-3 h-3'} />
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
          className="inline-flex items-center justify-center text-4xl rounded-full bg-primary hover:bg-secondary w-8 h-8 text-white focus:outline-none focus-visible:outline-none relative"
          onClick={handleClickAddProductToCart}
          type="button"
        >
          <AddIcon className={'w-3 h-3'} />
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
