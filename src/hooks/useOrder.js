import { useError } from '@/hooks/useError'
import { setMessageSuccess } from '@/utils/alerts'
import { useRouter } from 'next/navigation'
import { useCart } from '@/hooks/useCart'

export const useOrders = () => {
  const { handlerFetch } = useError()
  const router = useRouter()
  const { cleanCart } = useCart()

  const getOneOrder = async ({ id }) => {
    const url = `/api/orders/getOne?id=${id}`
    const response = await handlerFetch({ url })
    const { data } = response
    return data
  }

  const addNewOrder = async (body) => {
    const url = `/api/orders/add`
    const { isError, data } = await handlerFetch({ url, body, method: 'POST' })
    if (isError) return

    const { idOrder } = data
    setMessageSuccess({ message: '¡Pedido recibido!' })
    localStorage.removeItem('CART')
    cleanCart()
    router.push(`/store/complete-order/${idOrder}`)
  }

  return { addNewOrder, getOneOrder }
}
