import { addOne } from '@/utils/methodsInAPI'

export default async function handler(request, res) {
  return await addOne({ request, res, moduleRoute: 'product' })
}
