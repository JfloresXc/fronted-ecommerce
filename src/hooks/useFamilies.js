import { useError } from '@/hooks/useError'
import { setMessageSuccess } from '@/utils/alerts'
import { useRouter } from 'next/navigation'

export const useFamilies = () => {
  const { tryCatch } = useError()
  const router = useRouter()

  const getAllFamilies = async () => {
    return tryCatch(
      async () => {
        const URL = `/api/families/getAll`
        const response = await fetch(URL)
        const data = await response.json()
        return data
      },
      (data) => {
        return data
      }
    )
  }

  const getActivedFamilies = async () => {
    return tryCatch(
      async () => {
        const URL = `/api/families/getActivedFamilies`
        const response = await fetch(URL)
        const data = await response.json()
        return data
      },
      (data) => {
        return data
      }
    )
  }

  const getOneFamily = async ({ id }) => {
    return tryCatch(
      async () => {
        const URL = `/api/families/getOne?id=${id}`
        const response = await fetch(URL)
        const data = await response.json()
        return data
      },
      (data) => {
        return data
      }
    )
  }

  const addNewFamily = async (body) => {
    return tryCatch(
      async () => {
        const URL = `/api/families/add`
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
        setMessageSuccess({ message: '¡Familia agregado!' })
        router.push('/account/families')
      }
    )
  }

  const editFamily = async (id, body) => {
    return tryCatch(
      async () => {
        const URL = `/api/families/edit?id=${id}`
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
        setMessageSuccess({ message: '¡Familia editada!' })
        router.push('/account/families')
      }
    )
  }

  return {
    getAllFamilies,
    getActivedFamilies,
    getOneFamily,
    addNewFamily,
    editFamily,
  }
}
