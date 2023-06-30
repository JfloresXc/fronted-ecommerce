'use client'

import { useEffect, useState } from 'react'
import Button from '@/components/button'
import InputGroup from './InputGroup'
import { useForm } from 'react-hook-form'
import { getNameAction, getValidateAction } from '@/utils/crud'
import { useProducts } from '@/hooks/useProducts'
import Toggle from './Toggle'
import Textarea from './Textarea'
import Select from './Select'
import { useCategories } from '@/hooks/useCategories'
import ModalImages from '../modal/ModalImages'

export default function FormProduct({ action = 'a', id = '' }) {
  const [categories, setCategories] = useState([])
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
  } = useForm({ mode: 'onChange' })
  const { isActionEdit, isActionAdd } = getValidateAction({ action })
  const { addNewProduct, editProduct, getOneProduct } = useProducts()
  const { getActivedCategories } = useCategories()

  useEffect(() => {
    getActivedCategories().then((categoriesData) => {
      setCategories(categoriesData)
      if (isActionEdit) getProduct()
      else if (isActionAdd) {
        setValue('idCategory', categoriesData[0].id)
        setValue('state', true)
      }
    })
  }, [])

  const getProduct = async () => {
    const product = await getOneProduct({ id })
    const {
      name = '',
      description = '',
      brand = '',
      price = '',
      priceBefore = '',
      rating = '',
      stock = '',
      code = '',
      state,
      category: { id: idCategory = '' },
    } = product
    setValue('name', name)
    setValue('description', description)
    setValue('brand', brand)
    setValue('idCategory', idCategory)
    setValue('price', price)
    setValue('priceBefore', priceBefore)
    setValue('rating', rating)
    setValue('stock', stock)
    setValue('code', code)
    setValue('state', state)
  }

  const handleSubmitOwn = async (data) => {
    const dataToSend = { ...data, state: data.state ? 1 : 0 }

    if (isActionAdd) await addNewProduct(dataToSend)
    else if (isActionEdit) await editProduct(id, dataToSend)
  }

  return (
    <>
      <form className="space-y-6" onSubmit={handleSubmit(handleSubmitOwn)}>
        <div className="flex justify-between">
          <h2 className="text-brand-dark text-base lg:text-lg xl:text-[20px] font-semibold xl:leading-8 mb-5 md:mb-6 lg:mb-7 lg:-mt-1">
            Datos del producto
          </h2>
          {isActionEdit && (
            <ModalImages
              label="Ver imágenes"
              titleModal=""
              product={{
                name: getValues('name'),
                idProduct: id,
              }}
            />
          )}
        </div>
        <div className="grid lg:grid-cols-2 gap-5">
          <InputGroup
            name="name"
            errors={errors}
            label="Nombre"
            validations={{
              ...register('name', {
                required: true,
              }),
            }}
          />
          <InputGroup
            name={'code'}
            errors={errors}
            label={'Código'}
            placeholder={'Código'}
            validations={{
              ...register('code', {
                required: true,
              }),
            }}
          />
        </div>
        <div className="grid lg:grid-cols-2 gap-5">
          <Textarea
            name={'description'}
            errors={errors}
            label={'Descripción'}
            placeholder={'Descripción'}
            validations={{
              ...register('description'),
            }}
          />
          <InputGroup
            name={'brand'}
            errors={errors}
            label={'Marca'}
            placeholder={'Marca'}
            validations={{
              ...register('brand'),
            }}
          />
        </div>
        <div className="grid lg:grid-cols-2 gap-5">
          <InputGroup
            name={'price'}
            errors={errors}
            label={'Precio'}
            placeholder={'Precio'}
            type="number"
            validations={{
              ...register('price', {
                required: true,
              }),
            }}
          />

          <InputGroup
            name={'priceBefore'}
            errors={errors}
            label={'Precio antes'}
            placeholder={'Precio antes'}
            type="number"
            validations={{
              ...register('priceBefore'),
            }}
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-5">
          <InputGroup
            name={'discountPercentage'}
            errors={errors}
            label={'Porcentaje de descuento'}
            placeholder={'Porcentaje de descuento'}
            type="number"
            validations={{
              ...register('discountPercentage'),
            }}
          />

          <InputGroup
            name={'stock'}
            errors={errors}
            label={'Stock'}
            placeholder={'Stock'}
            type="number"
            validations={{
              ...register('stock'),
            }}
          />
        </div>
        <div className="grid lg:grid-cols-2 gap-5">
          <Select
            label={'Categoría'}
            items={categories}
            validations={{
              ...register('idCategory'),
            }}
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
    </>
  )
}
