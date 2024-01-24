import { handleError, showErrorIfExist } from '@/utils/error'
import { useLoading } from './useLoading'
import { useRouter } from 'next/navigation'

export const useError = () => {
  const { showLoading, hideLoading } = useLoading()
  const router = useRouter()

  const isTokenError = (name = '') => {
    return (
      name === 'TokenExpiredError' ||
      name === 'JsonWebTokenError' ||
      name === 'NotBeforeError'
    )
  }

  const handlerTryCatch = async (firstCallback) => {
    showLoading()
    try {
      const response = await firstCallback()
      const { name } = response

      if (isTokenError(name)) {
        response.message = 'Su sesión ha expirado'
        showErrorIfExist(response)
        router.push('/logout')
      }

      showErrorIfExist(response)
      return response
    } catch (error) {
      showErrorIfExist({ isError: true })
    } finally {
      hideLoading()
    }
  }

  const handlerFetch = async ({
    url,
    method = 'GET',
    body,
    isFormData = false,
  }) => {
    showLoading()
    try {
      let objectToSend = {
        method,
        body: body && JSON.stringify(body),
      }

      if (!isFormData) {
        objectToSend = {
          ...objectToSend,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      }

      const response = await fetch(url, objectToSend)

      if (!response.ok) {
        throw new Error('Error de conexion no mapeado')
      }

      const responseJson = await response.json()
      const { name } = responseJson

      if (isTokenError(name)) {
        responseJson.message = 'Su sesión ha expirado'
        showErrorIfExist(responseJson)
        router.push('/logout')
      }

      showErrorIfExist(responseJson)

      return responseJson
    } catch (error) {
      showErrorIfExist({ isError: true })
      return null
    } finally {
      hideLoading()
    }
  }

  const tryCatch = async (firstCallback, secondCallback = null) => {
    showLoading()
    try {
      let response = await firstCallback()
      const { name } = response

      hideLoading()
      if (isTokenError(name)) router.push('/logout')

      const { isError } = handleError(response)
      if (!isError) {
        response = await secondCallback(response)
      }
      return response
    } catch (error) {
      hideLoading()
      handleError({ isError: true })
    }
  }

  /**
   * Busca un recurso y retorna la respuesta
   * @param {*} callback Función que busca un recurso
   * @returns  Respuesta de la búsqueda
   */
  const tryCatchReturnResponse = async (callback) => {
    showLoading()
    try {
      const response = await callback()
      handleError(response)
      hideLoading()
      return response
    } catch (error) {
      hideLoading()
      handleError({ isError: true })
    }
  }

  /**
   * Busca un recurso y ejecuta una acción si no hay error
   * @param {*} firstCallback Función que busca un recurso
   * @param {*} secondCallback Función que ejecuta una acción si no hay error
   */
  const tryCatchOnlyActions = async (firstCallback, secondCallback) => {
    showLoading()
    try {
      const response = await firstCallback()
      hideLoading()
      const { isError } = handleError(response)
      if (!isError) secondCallback(response)
    } catch (error) {
      hideLoading()
      handleError({ isError: true })
    }
  }

  return {
    tryCatchReturnResponse,
    tryCatchOnlyActions,
    tryCatch,
    handlerTryCatch,
    handlerFetch,
  }
}
