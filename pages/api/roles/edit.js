import { API_URL_SERVER_BACKEND } from '@/settings/envs'
import { handleErrorWithCause } from '@/utils/errorInAPI'
import { getHeadersFromAPI } from '@/utils/headers'

export default async function handler(req, res) {
  try {
    const { headers } = getHeadersFromAPI(req)
    const id = req.query.id
    const body = req.body

    const url = `${API_URL_SERVER_BACKEND}/role/${id}`
    const response = await fetch(url, {
      method: 'PUT',
      headers,
      body: JSON.stringify(body),
    })
    const data = await response.json()

    res.json(data)
  } catch (error) {
    handleErrorWithCause(error, res)
  }
}
