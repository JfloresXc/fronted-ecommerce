'use client'

import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useCategories } from '@/hooks/useCategories'
import InputGroup from './InputGroup'
import Button from '../button'
import Toggle from './Toggle'
import { getNameAction, getValidateAction } from '@/utils/crud'
import Textarea from './Textarea'

export default function FormCategory({ action = 'a', id = '' }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({ mode: 'onChange' })

  const { isActionEdit, isActionAdd } = getValidateAction({ action })

  const { addNewCategory, editCategory, getOneCategory } = useCategories()

  useEffect(() => {
    if (isActionEdit) getCategory()
    else if (isActionAdd) setValue('state', true)
  }, [])

  const getCategory = async () => {
    const category = await getOneCategory({ id })
    setValue('name', category.name)
    setValue('description', category.description)
    setValue('state', category.state)
  }

  const handleSubmitOwn = async (data) => {
    const dataToSend = { ...data, state: data.state ? 1 : 0 }

    if (isActionAdd) await addNewCategory(dataToSend)
    else if (isActionEdit) await editCategory(id, dataToSend)
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit(handleSubmitOwn)}>
      <h2 className="text-brand-dark text-base lg:text-lg xl:text-[20px] font-semibold xl:leading-8 mb-5 md:mb-6 lg:mb-7 lg:-mt-1">
        Datos de la categoría
      </h2>
      <div className="grid lg:grid-cols-2 gap-5">
        <InputGroup
          name="name"
          label="Nombre"
          errors={errors}
          validations={{
            ...register('name', {
              required: true,
            }),
          }}
        />
        <Textarea
          label="Descripción"
          name={'description'}
          errors={errors}
          validations={{ ...register('description') }}
        />
      </div>
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
