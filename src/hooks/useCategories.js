import { useError } from '@/hooks/useError'
import { setMessageSuccess } from '@/utils/alerts'
import { useRouter } from 'next/navigation'

export const useCategories = () => {
  const { tryCatch } = useError()
  const router = useRouter()

  const getAllCategories = async () => {
    return tryCatch(
      async () => {
        const URL = `/api/categories/getAll`
        const response = await fetch(URL)
        const data = await response.json()
        return data
      },
      (data) => {
        return data
      }
    )
  }

  const getActivedCategories = async () => {
    return tryCatch(
      async () => {
        const URL = `/api/categories/getAll?state=1`
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
        const URL = `/api/categories/getOne?id=${id}`
        const response = await fetch(URL)
        const data = await response.json()
        return data
      },
      (data) => {
        return data
      }
    )
  }

  const addNewCategory = async (body) => {
    return tryCatch(
      async () => {
        const URL = `/api/categories/add`
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
        setMessageSuccess({ message: '¡Categoría agregado!' })
        router.push('/account/categories')
      }
    )
  }

  const editCategory = async (id, body) => {
    return tryCatch(
      async () => {
        const URL = `/api/categories/edit?id=${id}`
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
        setMessageSuccess({ message: '¡Categoría editada!' })
        router.push('/account/categories')
      }
    )
  }

  return {
    getAllCategories,
    getActivedCategories,
    getOneCategory,
    addNewCategory,
    editCategory,
  }
}
