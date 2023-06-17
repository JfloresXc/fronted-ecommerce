'use client'

export default function Select({
  label,
  defaultValue,
  items,
  validations = {},
}) {
  return (
    <div className={`w-full`}>
      <div className="relative w-full mb-3">
        <label
          className={`block font-normal text-sm leading-none mb-3 cursor-pointer text-gray-500`}
        >
          {label}
        </label>
        <select
          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
          {...validations}
          defaultValue={defaultValue}
        >
          {items.map((item, index) => {
            return (
              <option
                key={index}
                value={item.id}
                selected={item.id === defaultValue}
              >
                {item.name}
              </option>
            )
          })}
        </select>
      </div>
    </div>
  )
}
