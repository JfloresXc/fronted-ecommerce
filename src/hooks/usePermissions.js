import { useError } from '@/hooks/useError'
import { setMessageSuccess } from '@/utils/alerts'

export const usePermissions = () => {
  const { tryCatch } = useError()

  const getPermissionssForIdRole = async ({ idRole }) => {
    return tryCatch(
      async () => {
        const URL = `/api/permissions/getAll?idRole=${idRole}`
        const response = await fetch(URL)
        const data = await response.json()
        return data
      },
      (data) => {
        return data
      }
    )
  }

  const getModulesAndActions = async () => {
    return tryCatch(
      async () => {
        const URL = `/api/permissions/getModulesAndActions`
        const response = await fetch(URL)
        const data = await response.json()
        return data
      },
      (data) => {
        return data
      }
    )
  }

  const editPermissions = async (body) => {
    return tryCatch(
      async () => {
        const URL = `/api/permissions/set`
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
        setMessageSuccess({ message: 'Permisos actualizados' })
      }
    )
  }

  return {
    getPermissionssForIdRole,
    getModulesAndActions,
    editPermissions,
  }
}
