import { API_URL_SERVER_BACKEND } from '@/settings/envs'
import { handleErrorWithCause } from '@/utils/errorInAPI'
import { getHeadersFromAPI } from '@/utils/headers'

export default async function handler(req, res) {
  try {
    const { headers } = getHeadersFromAPI(req)

    const url = `${API_URL_SERVER_BACKEND}/permission/getModulesAndActions`
    const response = await fetch(url, {
      method: 'GET',
      headers,
    })
    const data = await response.json()

    res.json(data)
  } catch (error) {
    handleErrorWithCause(error, res)
  }
}
