import { useParamsFromQuery } from '@/hooks/useParamsFromQuery'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'

const OPTIONS = [
  {
    value: 'todos',
    label: 'Seleccionar',
  },
  {
    value: 'minprice',
    label: 'Menor precio',
  },
  {
    value: 'maxprice',
    label: 'Mayor precio',
  },
  {
    value: 'az',
    label: 'A - Z',
  },
  {
    value: 'za',
    label: 'Z - A',
  },
]

export default function SelectFilterOrder({ slug = '/store/search' }) {
  const router = useRouter()
  const { searchtext, order: orderFromQuery, maxprice } = useParamsFromQuery()
  const [order, setOrder] = useState('todos')

  useEffect(() => {
    setOrder(orderFromQuery)
  }, [orderFromQuery])

  const redirectToProducts = (order) => {
    router.push(
      `${slug}?search_text=${searchtext}&order=${order}&maxprice=${maxprice}`
    )
  }

  const handleChange = (event) => {
    const { value } = event.target
    redirectToProducts(value)
  }

  return (
    <div className={`w-full`}>
      <div className="relative w-full mr-2 bg-gray-200 ">
        <select
          className="bg-gray-200 px-5 p-2 text-sm focus:outline-none focus:ring ease-linear transition-all duration-150 w-[150px]"
          onChange={handleChange}
          value={order}
        >
          {OPTIONS.map(({ value, label }, index) => {
            return (
              <option value={value} key={index}>
                {label}
              </option>
            )
          })}
        </select>
      </div>
    </div>
  )
}
