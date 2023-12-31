export const orderFilters = () => {
  const filterFromOrder = (products = [], filters) => {
    let filteredProducts = products

    if (filters?.order === 'minPrice') {
      filteredProducts = products.sort((a, b) => a.price - b.price)
    } else if (filters?.order === 'maxPrice') {
      filteredProducts = products.sort((a, b) => b.price - a.price)
    } else if (filters?.order === 'AZ') {
      filteredProducts = products.sort((a, b) => a.name.localeCompare(b.name))
    } else if (filters?.order === 'ZA') {
      filteredProducts = products.sort((a, b) => b.name.localeCompare(a.name))
    }

    return filteredProducts
  }

  const filterProducts = (products = [], filters) => {
    let filteredProducts = products.filter((product) => {
      const isRangePrice = product.price <= filters?.rangePrice
      const isCategory =
        filters?.category === 'todos' || product.category === filters?.category

      return isRangePrice && isCategory
    })

    filteredProducts = filterFromOrder(filteredProducts, filters)

    return filteredProducts
  }

  return {
    filterProducts,
    filterFromOrder,
  }
}
