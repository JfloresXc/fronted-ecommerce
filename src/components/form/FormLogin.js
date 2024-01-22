'use client'

import { useAuth } from '@/hooks/useAuth'
import InputGroup from './InputGroup'
import { useForm } from 'react-hook-form'
import { expressions } from '@/utils/expressions'
import Button from '../button'

function HeaderForm() {
  return (
    <div className="mb-6 text-center">
      <div>
        {/* <a className="inline-block focus:outline-none max-w-[131px] w-full" href="/">
          <img alt="BoroBazar" loading="eager" width="131" height="30" decoding="async" data-nimg="1" src="https://borobazar.vercel.app/_next/static/media/logo.026129ac.svg"/>
        </a> */}
      </div>
      <h4 className="text-xl font-semibold text-brand-dark sm:text-2xl sm:pt-3 ">
        ¡Bienvenido una vez más!
      </h4>
      <div className="mt-3 mb-1 text-sm text-center sm:text-15px text-body">
        ¿No tienes una cuenta?{' '}
        <a href="#" className="text-primary hover:underline focus:outline-none">
          Crea una cuenta
        </a>
      </div>
    </div>
  )
}

export default function FormLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onChange' })

  const { login } = useAuth()

  const handleSubmitOwn = async (data) => {
    const { email, password } = data
    await login({ email, password })
  }

  return (
    <div className="max-h-min block w-full md:w-1/2 lg:w-[45%] xl:w-[35%] py-6 sm:py-10 px-4 sm:px-8 md:px-6 lg:px-8 xl:px-12 rounded-md flex-col justify-center border border-gray-200 mx-auto">
      <HeaderForm />
      <form className="space-y-6" onSubmit={handleSubmit(handleSubmitOwn)}>
        <InputGroup
          name="email"
          label="Tu correo electrónico"
          pattern={expressions.email}
          errors={errors}
          validations={{
            ...register('email', {
              required: true,
              pattern: expressions.email,
            }),
          }}
        />
        <InputGroup
          type="password"
          name="password"
          label="Tu contraseña"
          errors={errors}
          validations={{ ...register('password', { required: true }) }}
        />
        <div className="flex items-start">
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                value=""
                className={
                  'w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary'
                }
              />
            </div>
            <label
              htmlFor="remember"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Recuérdame
            </label>
          </div>
        </div>
        <div className="flex justify-center align-center">
          <Button label={'Iniciar sesión'} type="submit" width="200px" />
        </div>
      </form>
    </div>
  )
}
