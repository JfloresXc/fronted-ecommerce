import { useError } from '@/hooks/useError'
import { setMessageSuccess } from '@/utils/alerts'
import { useRouter } from 'next/navigation'

export const useUsers = () => {
  const { tryCatch } = useError()
  const router = useRouter()

  const getAllUsers = async () => {
    return tryCatch(
      async () => {
        const URL = `/api/users/getAll`
        const response = await fetch(URL)
        const data = await response.json()
        return data
      },
      (data) => {
        const dataAdded = data.map((item) => {
          return { ...item, rolename: item?.role?.name }
        })
        return dataAdded
      }
    )
  }

  const getActivedUsers = async () => {
    return tryCatch(
      async () => {
        const URL = `/api/users/getAll?state=1`
        const response = await fetch(URL)
        const data = await response.json()
        return data
      },
      (data) => {
        const dataAdded = data.map((item) => {
          return { ...item, rolename: item?.role?.name }
        })
        return dataAdded
      }
    )
  }

  const getOneUser = async ({ id }) => {
    return tryCatch(
      async () => {
        const URL = `/api/users/getOne?id=${id}`
        const response = await fetch(URL)
        const data = await response.json()
        return data
      },
      (data) => {
        const { role = {} } = data
        const dataToSend = { ...data, idRole: role }
        return dataToSend
      }
    )
  }

  const addNewUser = async (body) => {
    return tryCatch(
      async () => {
        const URL = `/api/users/add`
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
        setMessageSuccess({ message: '¡Usuario agregado!' })
        router.push('/account/users')
      }
    )
  }

  const editUser = async (id, body) => {
    return tryCatch(
      async () => {
        const URL = `/api/users/edit?id=${id}`
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
        setMessageSuccess({ message: '¡Usuario editado!' })
        router.push('/account/users')
      }
    )
  }

  const changePassword = async ({ id, body }) => {
    return tryCatch(
      async () => {
        const URL = `/api/users/changePassword?id=${id}`
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
        setMessageSuccess({ message: '¡Contraseña reestablecida!' })
        router.push('/account/users')
      }
    )
  }

  return {
    getAllUsers,
    getActivedUsers,
    getOneUser,
    addNewUser,
    editUser,
    changePassword,
  }
}
