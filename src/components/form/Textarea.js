'use client'

import { useId } from 'react'

export default function Textareatest({
  label = 'Not label',
  name,
  errors,
  validations,
}) {
  const inputId = useId(1, 'login-email-')
  const typeError = errors[name]?.type
  const isRequired = typeError === 'required'
  const isPatternValid = typeError === 'pattern'
  const isInvalid = isRequired || isPatternValid
  const colorValidation = isInvalid ? 'red' : 'gray'

  return (
    <div className={`mb-3`}>
      <label
        htmlFor={inputId}
        className={`block font-normal text-sm leading-none mb-3 cursor-pointer text-${colorValidation}-500`}
      >
        {label}
      </label>
      <textarea
        id={inputId}
        className={`px-5 py-4 text-heading outline-none w-full h-[52px] ltr:pl-5 rtl:pr-5 md:ltr:pl-6 md:rtl:pr-6 ltr:pr-14 rtl:pl-14 md:ltr:pr-16 md:rtl:pl-16 bg-brand-light text-sm lg:text-15px rounded-md transition-all duration-200 border border-${
          typeError ? colorValidation + '-500' : 'gray-200'
        }`}
        {...validations}
      />

      {isRequired && (
        <p className="mt-2 text-xs text-red-500">
          <span className="font-medium">Oops!</span> Este campo es requerido
        </p>
      )}
      {isPatternValid && (
        <p className="mt-2 text-xs text-red-500">
          <span className="font-medium">Oops!</span> Ingresa un correo válido
        </p>
      )}
    </div>
    // <Controller
    //   name="myTextarea"
    //   control={control}
    //   defaultValue="Texto por defecto"
    //   rules={{ required: true }}
    //   render={({ field }) => (
    //     <textarea
    //       id={inputId}
    //       className={`px-5 py-4 text-heading outline-none w-full h-[52px] ltr:pl-5 rtl:pr-5 md:ltr:pl-6 md:rtl:pr-6 ltr:pr-14 rtl:pl-14 md:ltr:pr-16 md:rtl:pl-16 bg-brand-light text-sm lg:text-15px rounded-md transition-all duration-200 border border-${
    //         typeError ? colorValidation + '-500' : 'gray-200'
    //       }`}
    //       {...field}
    //     />
    //   )}
    // />
  )
}
