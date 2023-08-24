import { getAll } from '@/utils/methodsInAPI'

export default async function handler(req, res) {
  const { searchtext, page, limit, order, idcategory, maxprice } = req.query
  const url = `product/search?searchtext=${searchtext}&page=${page}&order=${order}&idcategory=${idcategory}&maxprice=${maxprice}&limit=${limit}`

  return await getAll({
    request: req,
    res,
    moduleRoute: url,
  })
}
