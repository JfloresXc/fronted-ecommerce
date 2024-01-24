import { useError } from '@/hooks/useError'
import { setMessageSuccess } from '@/utils/alerts'
import { useRouter } from 'next/navigation'

export const useFamilies = () => {
  const { handlerFetch } = useError()
  const router = useRouter()

  const getAllFamilies = async () => {
    const url = `/api/families/getAll`
    const response = await handlerFetch({ url })
    const { data = [] } = response
    return data
  }

  const getActivedFamilies = async () => {
    const url = `/api/families/getActivedFamilies`
    const response = await handlerFetch({ url })
    const { data = [] } = response
    return data
  }

  const getOneFamily = async ({ id }) => {
    const url = `/api/families/getOne?id=${id}`
    const response = await handlerFetch({ url })
    const { data = [] } = response
    return data
  }

  const addNewFamily = async (body) => {
    const url = `/api/families/add`
    const { isError } = await handlerFetch({ url, body, method: 'POST' })
    if (isError) return

    setMessageSuccess({ message: '¡Familia agregada!' })
    router.push('/admin/families')
  }

  const editFamily = async (id, body) => {
    const url = `/api/families/edit?id=${id}`
    const { isError } = await handlerFetch({ url, body, method: 'PUT' })
    if (isError) return

    setMessageSuccess({ message: '¡Familia editada!' })
    router.push('/admin/families')
  }

  return {
    getAllFamilies,
    getActivedFamilies,
    getOneFamily,
    addNewFamily,
    editFamily,
  }
}
