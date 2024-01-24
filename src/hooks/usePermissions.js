import { useError } from '@/hooks/useError'
import { setMessageSuccess } from '@/utils/alerts'

export const usePermissions = () => {
  const { handlerFetch } = useError()

  const getPermissionssForIdRole = async ({ idRole }) => {
    const url = `/api/permissions/getAll?idRole=${idRole}`
    const response = await handlerFetch({ url })
    const { data = [] } = response
    return data
  }

  const getModulesAndActions = async () => {
    const url = `/api/permissions/getModulesAndActions`
    const response = await handlerFetch({ url })
    const { data = [] } = response
    return data
  }

  const editPermissions = async (body) => {
    const url = `/api/permissions/set`
    const { isError } = await handlerFetch({ url, body, method: 'POST' })
    if (isError) return

    setMessageSuccess({ message: 'Permisos actualizados' })
  }

  return {
    getPermissionssForIdRole,
    getModulesAndActions,
    editPermissions,
  }
}
