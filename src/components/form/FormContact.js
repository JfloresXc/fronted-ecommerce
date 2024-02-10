'use client'

import Button from '@/components/button'
import InputGroup from './InputGroup'
import { useForm } from 'react-hook-form'
import Textarea from './Textarea'

export default function FormContact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onChange' })

  const handleSubmitOwn = async (data) => {
    console.log(data)
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit(handleSubmitOwn)}>
      <div className="block">
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
      </div>
      <div className="block">
        <InputGroup
          name="email"
          label="Correo electrónico"
          errors={errors}
          validations={{
            ...register('email', {
              required: true,
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: 'El correo electrónico no es válido',
              },
            }),
          }}
        />
      </div>
      <div>
        <InputGroup
          type="text"
          name="phoneNumber"
          label="Teléfono"
          errors={errors}
          validations={{
            ...register('phoneNumber', {
              required: true,
              pattern: {
                value: /\d{9}/,
                message: 'El teléfono no es válido',
              },
            }),
          }}
        />
      </div>
      <div>
        <Textarea
          label="Mensaje"
          name={'message'}
          errors={errors}
          validations={{ ...register('message') }}
        />
      </div>
      <Button type="submit" label={'Enviar mensaje 📤'} />
    </form>
  )
}
