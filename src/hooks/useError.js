import { handleError } from '@/utils/error'
import { useLoading } from './useLoading'

export const useError = () => {
  const { showLoading, hideLoading } = useLoading()

  const tryCatch = async (firstCallback, secondCallback = null) => {
    showLoading()
    try {
      const response = await firstCallback()
      hideLoading()
      const { isError } = handleError(response)
      if (!isError) secondCallback(response)
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
  }
}
