import { useError } from '@/hooks/useError'
import { useRouter } from 'next/navigation'

export const useRoles = () => {
  const { tryCatch } = useError()
  const router = useRouter()

  const getAllRoles = async () => {
    return tryCatch(
      async () => {
        const URL = `/api/roles/getAll`
        const response = await fetch(URL)
        const data = await response.json()
        return data
      },
      (data) => {
        return data
      }
    )
  }

  const getOneRole = async ({ id }) => {
    return tryCatch(
      async () => {
        const URL = `/api/roles/getOne?id=${id}`
        const response = await fetch(URL)
        const data = await response.json()
        return data
      },
      (data) => {
        return data
      }
    )
  }

  const addNewRole = async (body) => {
    return tryCatch(
      async () => {
        const URL = `/api/roles/add`
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
      () => router.push('/account/roles')
    )
  }

  const editRole = async (id, body) => {
    return tryCatch(
      async () => {
        const URL = `/api/roles/edit?id=${id}`
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
        router.push('/account/roles')
      }
    )
  }

  return {
    getAllRoles,
    getOneRole,
    addNewRole,
    editRole,
  }
}
