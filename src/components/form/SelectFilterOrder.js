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

export default function SelectFilterOrder({ slug = 'search' }) {
  const router = useRouter()
  const { searchtext, order: orderFromQuery, maxprice } = useParamsFromQuery()
  const [order, setOrder] = useState('todos')

  useEffect(() => {
    setOrder(orderFromQuery)
  }, [orderFromQuery])

  const redirectToProducts = (order) => {
    router.push(
      `/${slug}?search_text=${searchtext}&order=${order}&maxprice=${maxprice}`
    )
  }

  const handleChange = (event) => {
    const { value } = event.target
    redirectToProducts(value)
  }

  return (
    <div className={`w-full`}>
      <div className="relative w-full mb-3">
        <select
          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring ease-linear transition-all duration-150 sm:w-5 lg:w-[150px]"
          onChange={handleChange}
          value={order}
        >
          {OPTIONS.map(({ value, label }, index) => {
            return (
              <option value={value} key={index} className="p-1">
                {label}
              </option>
            )
          })}
        </select>
      </div>
    </div>
  )
}
