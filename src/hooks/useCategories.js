import { useError } from '@/hooks/useError'
import { setMessageSuccess } from '@/utils/alerts'
import { useRouter } from 'next/navigation'

export const useCategories = () => {
  const { handlerFetch } = useError()
  const router = useRouter()

  const getAllCategories = async () => {
    const url = `/api/categories/getAll`
    const response = await handlerFetch({ url })
    const { data = [] } = response
    return data
  }

  const getActivedCategories = async () => {
    const url = `/api/categories/getAll?state=1`
    const response = await handlerFetch({ url })
    const { data = [] } = response
    return data
  }

  const getOneCategory = async ({ id }) => {
    const url = `/api/categories/getOne?id=${id}`
    const response = await handlerFetch({ url })
    const { data = [] } = response
    return data
  }

  const getOneActivedCategory = async ({ id }) => {
    const url = `/api/categories/getOneActived?id=${id}`
    const response = await handlerFetch({ url })
    const { data = [] } = response
    return data
  }

  const addNewCategory = async (body) => {
    const url = `/api/categories/add`
    const { isError } = await handlerFetch({ url, body, method: 'POST' })
    if (isError) return

    setMessageSuccess({ message: '¡Categoría agregado!' })
    router.push('/admin/categories')
  }

  const editCategory = async (id, body) => {
    const url = `/api/categories/edit?id=${id}`
    const { isError } = await handlerFetch({ url, body, method: 'PUT' })
    if (isError) return

    setMessageSuccess({ message: '¡Categoría editada!' })
    router.push('/admin/categories')
  }

  return {
    getAllCategories,
    getActivedCategories,
    getOneCategory,
    getOneActivedCategory,
    addNewCategory,
    editCategory,
  }
}
