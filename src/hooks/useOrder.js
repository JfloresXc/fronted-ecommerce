import { useError } from '@/hooks/useError'
import { setMessageSuccess } from '@/utils/alerts'
import { useRouter } from 'next/navigation'

export const useOrders = () => {
  const { tryCatch } = useError()
  const router = useRouter()

  const getAllCategories = async () => {
    return tryCatch(
      async () => {
        const URL = `/api/orders/getAll`
        const response = await fetch(URL)
        const data = await response.json()
        return data
      },
      (data) => {
        return data
      }
    )
  }

  const getOneCategory = async ({ id }) => {
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
      () => {
        setMessageSuccess({ message: 'Pedido agregado!' })
        router.push('/')
      }
    )
  }

  return { addNewOrder, getAllCategories, getOneCategory }
}
