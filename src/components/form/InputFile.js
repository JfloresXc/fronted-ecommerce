import { useId } from 'react'

export default function InputFile({
  label = 'Not label',
  name,
  errors,
  limit = 1024 * 1024,
  validations,
}) {
  const inputId = useId(1, 'image-')
  const typeError = errors[name]?.type
  const isRequired = typeError === 'required'
  const isLessThanLimit = typeError === 'manual'
  const isInvalid = isRequired || isLessThanLimit
  const colorValidation = isInvalid ? 'red' : 'gray'

  return (
    <>
      <div className={`mb-3`}>
        <label
          htmlFor={inputId}
          className={`block font-normal text-sm leading-none mb-3 cursor-pointer text-${colorValidation}-500`}
        >
          {label}
        </label>
        <input
          type="file"
          accept="image/png, image/jpeg"
          id={inputId}
          className={`block w-full text-sm text-gray-900 rounded-lg cursor-pointer bg-gray-50  focus:outline-none  border border-${
            typeError ? colorValidation + '-500' : 'gray-200'
          }`}
          {...validations}
        />
        {errors.file && (
          <p className="mt-2 text-xs text-red-500">
            <span className="font-medium">Oops!</span> {errors.file.message}
          </p>
        )}
      </div>
    </>
  )
}
