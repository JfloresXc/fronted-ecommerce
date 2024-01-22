import { useError } from '@/hooks/useError'
import { setMessageSuccess } from '@/utils/alerts'
import { useRouter } from 'next/navigation'
import { useCart } from '@/hooks/useCart'

export const useOrders = () => {
  const { tryCatch } = useError()
  const router = useRouter()
  const { cleanCart } = useCart()

  const getOneOrder = async ({ id }) => {
    return tryCatch(
      async () => {
        const URL = `/api/orders/getOne?id=${id}`
        const response = await fetch(URL)
        const data = await response.json()
        return data
      },
      (data) => {
        return data
      }
    )
  }

  const addNewOrder = async (body) => {
    return tryCatch(
      async () => {
        const URL = `/api/orders/add`
        const response = await fetch(URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body),
        })
        const data = await response.json()
        return data
      },
      (data) => {
        const { idOrder } = data
        setMessageSuccess({ message: '¡Pedido recibido!' })
        localStorage.removeItem('CART')
        cleanCart()
        router.push(`/store/complete-order/${idOrder}`)
      }
    )
  }

  return { addNewOrder, getOneOrder }
}
