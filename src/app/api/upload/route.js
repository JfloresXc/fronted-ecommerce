import { API_URL_SERVER_BACKEND } from '@/settings/envs'

export async function POST(request) {
  const formData = await request.formData()
  const file = formData.get('file')
  const ext = file.name.split('.').pop()
  const fileName = file.name + '-' + Date.now() + '.' + ext

  const url = `${API_URL_SERVER_BACKEND}/product/image`
  const response = await fetch(url, {
    method: 'POST',
    body: formData,
  })

  if (response.ok) {
    const data = await response.json()
    return new Response(
      JSON.stringify({
        message: `¡Imagen ${fileName} subida con éxito!`,
        data,
      })
    )
  } else {
    const data = await response.json()
    return new Response(JSON.stringify({ ...data }))
  }
}
