import { useError } from '@/hooks/useError'
import { setMessageSuccess } from '@/utils/alerts'
import { useRouter } from 'next/navigation'

export const useProducts = () => {
  const { tryCatch } = useError()
  const router = useRouter()

  const getAllProducts = async () => {
    return tryCatch(
      async () => {
        const URL = `/api/products/getAll`
        const response = await fetch(URL)
        const data = await response.json()
        return data
      },
      (data) => {
        return data
      }
    )
  }

  const getActivedProducts = async () => {
    return tryCatch(
      async () => {
        const URL = `/api/products/getAll?state=1`
        const response = await fetch(URL)
        const data = await response.json()
        return data
      },
      (data) => {
        return data
      }
    )
  }
  const getOneProduct = async ({ id }) => {
    return tryCatch(
      async () => {
        const URL = `/api/products/getOne?id=${id}`
        const response = await fetch(URL)
        const data = await response.json()
        return data
      },
      (data) => {
        return data
      }
    )
  }

  const addNewProduct = async (body) => {
    return tryCatch(
      async () => {
        const URL = `/api/products/add`
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
        setMessageSuccess({ message: '¡Producto agregado!' })
        router.push('/account/products')
      }
    )
  }

  const editProduct = async (id, body) => {
    return tryCatch(
      async () => {
        const URL = `/api/products/edit?id=${id}`
        const response = await fetch(URL, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body),
        })
        const data = await response.json()
        return data
      },
      () => {
        setMessageSuccess({ message: '¡Producto editado!' })
        router.push('/account/products')
      }
    )
  }

  return {
    getAllProducts,
    getActivedProducts,
    getOneProduct,
    addNewProduct,
    editProduct,
  }
}
