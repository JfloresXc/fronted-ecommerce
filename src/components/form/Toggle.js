export default function Toggle({ validations }) {
  return (
    <div className={`relative flex pt-6 md:pt-8 lg:pt-10`}>
      <div className="pr-2.5 rtl:pl-2.5">
        <h3 className="text-brand-dark text-15px sm:text-base font-semibold mb-1 font-medium">
          Estado
        </h3>
        <p className="text-brand-muted text-sm leading-7 lg:leading-[1.85em]">
          Activa o desactiva en caso de uso
        </p>
      </div>
      <div className="ml-auto rtl:mr-auto">
        <ToggleInput validations={validations} />
      </div>
    </div>
  )
}

export function ToggleInput({ validations }) {
  return (
    <label className="relative inline-flex items-center cursor-pointer ml-auto rtl:mr-auto">
      <input type="checkbox" className="sr-only peer" {...validations} />
      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-secondary"></div>
    </label>
  )
}
