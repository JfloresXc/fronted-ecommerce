'use client'

import { useForm } from 'react-hook-form'
import InputGroup from './InputGroup'
import Button from '../button'
import { useUsers } from '@/hooks/useUsers'
import { setMessageError } from '@/utils/alerts'
import { useAuth } from '@/hooks/useAuth'

export default function FormChangePassword({ action = 'a', id = '' }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onChange' })
  const { changePassword } = useUsers()
  const { idUser } = useAuth()

  const handleSubmitOwn = async (data) => {
    const {
      password = 'password',
      confirmPassword = 'confirmPassword',
      passwordBefore,
    } = data
    const areEqualPasswords = Boolean(password === confirmPassword)

    if (!areEqualPasswords) {
      setMessageError({ message: 'Las contraseñas no son iguales' })
      return
    }

    await changePassword({
      id: idUser,
      body: {
        password,
        passwordBefore,
      },
    })
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit(handleSubmitOwn)}>
      <h2 className="text-brand-dark text-base lg:text-lg xl:text-[20px] font-semibold xl:leading-8 mb-5 md:mb-6 lg:mb-7 lg:-mt-1">
        Reestablecer contraseña
      </h2>
      <div className="grid lg:grid-cols-2 gap-5">
        <InputGroup
          name="passwordBefore"
          label="Contraseña Anterior"
          type="password"
          errors={errors}
          validations={{
            ...register('passwordBefore', {
              required: true,
              minLength: 5,
            }),
          }}
        />
      </div>
      <div className="grid lg:grid-cols-2 gap-5">
        <InputGroup
          name="password"
          label="Nueva contraseña"
          type="password"
          errors={errors}
          validations={{
            ...register('password', {
              required: true,
              minLength: 5,
            }),
          }}
        />
        <InputGroup
          name="confirmPassword"
          label="Confirmar contraseña"
          type="password"
          errors={errors}
          validations={{
            ...register('confirmPassword', {
              required: true,
              minLength: 5,
            }),
          }}
        />
      </div>
      <hr className="mt-6 border-b-1 border-blueGray-300" />

      <Button label={`Reestablecer`} type="submit" width="" />
    </form>
  )
}
