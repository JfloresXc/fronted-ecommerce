import { deleteOne } from '@/utils/methodsInAPI'

export default async function handler(request, res) {
  return deleteOne({ request, res, moduleRoute: 'product/imagesForIdProduct' })
}
