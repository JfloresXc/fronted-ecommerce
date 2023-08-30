import { getAll } from '@/utils/methodsInAPI'

export default async function handler(req, res) {
  const { idfamily, page, limit, order, maxprice } = req.query
  const url = `product/family/${idfamily}?page=${page}&order=${order}&maxprice=${maxprice}&limit=${limit}`

  return await getAll({
    request: req,
    res,
    moduleRoute: url,
  })
}
