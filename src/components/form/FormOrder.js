'use client'

import InputGroup from './InputGroup'
import { useForm } from 'react-hook-form'
import Button from '../button'
import { useOrders } from '@/hooks/useOrder'
import { useCart } from '@/hooks/useCart'

export default function FormOrder() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onChange' })
  const { addNewOrder } = useOrders()
  const { products } = useCart()

  const handleSubmitOwn = async (data) => {
    const dataToSend = {
      ...data,
      products: products.map((product) => {
        return {
          nameProduct: product.name,
          quantity: product.quantity,
          unitPrice: product.price,
        }
      }),
    }

    await addNewOrder(dataToSend)
  }

  return (
    <>
      <form className="w-full" onSubmit={handleSubmit(handleSubmitOwn)}>
        <div className="flex justify-between">
          <h2 className="text-lg font-medium pb-6">Mis datos</h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-5">
          <InputGroup
            name="nameClient"
            errors={errors}
            label="Nombre completo"
            validations={{
              ...register('nameClient', {
                required: true,
              }),
            }}
          />
          <InputGroup
            name={'phonenumber'}
            errors={errors}
            label={'Número de Teléfono'}
            placeholder={'Número de Teléfono'}
            validations={{
              ...register('phonenumber', {
                required: true,
              }),
            }}
          />
        </div>
        <div className="grid lg:grid-cols-2 gap-5">
          <InputGroup
            name={'department'}
            errors={errors}
            label={'Departamento'}
            placeholder={'Departamento'}
            validations={{
              ...register('department', { required: true }),
            }}
          />
          <InputGroup
            name={'province'}
            errors={errors}
            label={'Provincia'}
            placeholder={'Provincia'}
            validations={{
              ...register('province', {
                required: true,
              }),
            }}
          />
        </div>
        <div className="grid lg:grid-cols-2 gap-5">
          <InputGroup
            name={'district'}
            errors={errors}
            label={'Distrito'}
            placeholder={'Distrito'}
            validations={{
              ...register('district', { required: true }),
            }}
          />
          <InputGroup
            name={'address'}
            errors={errors}
            label={'Dirección'}
            placeholder={'Dirección'}
            validations={{
              ...register('address', {
                required: true,
              }),
            }}
          />
        </div>

        <Button label={`REALIZAR MI PEDIDO 😊🛒`} type="submit" full={true} />
      </form>
    </>
  )
}
