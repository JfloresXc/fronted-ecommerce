'use client'

import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import InputGroup from './InputGroup'
import Button from '../button'
import Toggle from './Toggle'
import { getNameAction, getValidateAction } from '@/utils/crud'
import { expressions } from '@/utils/expressions'
import { useUsers } from '@/hooks/useUsers'
import { setMessageError } from '@/utils/alerts'
import Select from './Select'
import { useRoles } from '@/hooks/useRoles'

export default function FormUser({ action = 'a', id = '' }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({ mode: 'onChange' })
  const [roles, setRoles] = useState([])
  const { isActionEdit, isActionAdd } = getValidateAction({ action })
  const { getActivedRoles } = useRoles()
  const { addNewUser, editUser, getOneUser } = useUsers()

  useEffect(() => {
    getActivedRoles().then((rolesData) => {
      setRoles(rolesData)
      if (isActionEdit) getUser()
      else if (isActionAdd) setValue('idRole', rolesData[0].id)
    })
  }, [])

  const getUser = async () => {
    const user = await getOneUser({ id })
    const { username, email, idRole, state } = user
    setValue('username', username)
    setValue('email', email)
    setValue('idRole', idRole)
    setValue('state', state)
  }

  const handleSubmitOwn = async (data) => {
    const {
      password = 'password',
      confirmPassword = 'confirmPassword',
      state,
    } = data
    const areEqualPasswords = Boolean(password === confirmPassword)

    if (isActionAdd && !areEqualPasswords) {
      setMessageError({ message: 'Las contraseñas no son iguales' })
      return
    }

    const dataToSend = { ...data, state: state ? 1 : 0 }

    if (isActionAdd) await addNewUser(dataToSend)
    else if (isActionEdit) await editUser(id, dataToSend)
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit(handleSubmitOwn)}>
      <h2 className="text-brand-dark text-base lg:text-lg xl:text-[20px] font-semibold xl:leading-8 mb-5 md:mb-6 lg:mb-7 lg:-mt-1">
        Datos del usuario
      </h2>
      <div className="grid lg:grid-cols-2 gap-5">
        <InputGroup
          name="username"
          label="Nombre de usuario"
          type="username"
          errors={errors}
          validations={{
            ...register('username', {
              required: true,
            }),
          }}
        />
        <InputGroup
          name="email"
          label="Correo electrónico"
          type="email"
          errors={errors}
          validations={{
            ...register('email', {
              required: true,
              pattern: expressions.email,
            }),
          }}
        />
        <Select
          label={'Rol'}
          items={roles}
          validations={{
            ...register('idRole'),
          }}
        />
      </div>
      {!isActionEdit && (
        <div className="grid lg:grid-cols-2 gap-5">
          <InputGroup
            name="password"
            label="Contraseña"
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
      )}
      <hr className="mt-6 border-b-1 border-blueGray-300" />
      <div className="grid w-full">
        <Toggle validations={{ ...register('state') }} />
      </div>
      <hr className="mt-6 border-b-1 border-blueGray-300" />

      <Button
        label={`${getNameAction({ action })}`}
        type="submit"
        full={true}
      />
    </form>
  )
}
