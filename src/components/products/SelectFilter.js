import { useProductFilters } from '@/hooks/useProductFilters'

export default function Select({ label }) {
  const { setFilters } = useProductFilters()

  const handleChange = (event) => {
    const { value } = event.target

    setFilters((prevState) => {
      return {
        ...prevState,
        order: value,
      }
    })
  }

  return (
    <div className={`w-full`}>
      <div className="relative w-full mb-3">
        <label
          className={`block font-normal text-sm leading-none mb-3 cursor-pointer text-gray-500`}
        >
          {label}
        </label>
        <select
          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring ease-linear transition-all duration-150 sm:w-5 lg:w-[150px]"
          onChange={handleChange}
        >
          <option value={'todos'} className="p-1">
            Seleccionar
          </option>
          <option value={'minPrice'} className="p-1">
            Menor precio
          </option>
          <option value={'maxPrice'} className="p-1">
            Mayor precio
          </option>
          <option value={'AZ'} className="p-1">
            A - Z
          </option>
          <option value={'ZA'} className="p-1">
            Z - A
          </option>
        </select>
      </div>
    </div>
  )
}
