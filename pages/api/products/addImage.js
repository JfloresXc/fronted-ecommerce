import { API_URL_SERVER_BACKEND } from '@/settings/envs'
import { handleErrorWithCause } from '@/utils/errorInAPI'
// import { getHeadersFromAPI } from '@/utils/headers'

export default async function handler(req, res) {
  try {
    const bodys = req.headers
    console.log(bodys.name)
    const url = `${API_URL_SERVER_BACKEND}/product/image`
    const response = await fetch(url, {
      method: 'POST',
      body: { name: bodys.name },
    })
    if (response.ok) {
      const data = await response.json()
      res.status(200).json(data)
    } else {
      res
        .status(500)
        .json({ error: 'Hubo un error al enviar el archivo al API externo.' })
    }
    // const data = await response.json()

    // res.json(data)
  } catch (error) {
    console.log(error)
    handleErrorWithCause(error, res)
  }
}
