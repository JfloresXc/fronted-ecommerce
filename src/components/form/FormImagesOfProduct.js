import React, { useState } from 'react'
import InputFile from './InputFile'
import { useForm } from 'react-hook-form'
import CardImage from '../products/CardImage'
import Button from '../button'
import { useProducts } from '@/hooks/useProducts'

export default function FormImagesOfProduct({ idProduct }) {
  const {
    register,
    formState: { errors },
    reset,
  } = useForm({ mode: 'onChange' })
  const [file, setFile] = useState(null)
  const { addOneImage } = useProducts()

  const handleSubmitOwn = async () => {
    if (!file) return

    const limit = 1024 * 1024
    if (file.size > limit) return

    const { name, size, type } = file
    const formData = new FormData()
    formData.append('file', file)
    formData.append('name', name)
    formData.append('size', size)
    formData.append('type', type)
    formData.append('idProduct', idProduct)
    addOneImage(formData).then(() => {
      reset()
    })
  }

  const handleChange = (event) => {
    const files = event.target.files
    const [file] = files
    setFile(file)
  }

  return (
    <form>
      <InputFile
        name={'file'}
        errors={errors}
        label={'Cargar imágenes'}
        validations={{
          ...register('file', {
            onChange: handleChange,
            required: 'El archivo es requerido',
            validate: {
              maxFileSize: (value) => {
                if (value[0]?.size > 1024 * 1024) {
                  return 'El tamaño del archivo debe ser menor a 1024KB'
                }
                return true
              },
            },
          }),
        }}
      />
      <div className="mx-auto mb-3">
        {file && <CardImage isPreview={true} url={URL.createObjectURL(file)} />}
      </div>
      <div className="ml-auto">
        <Button
          type="button"
          label="Agregar imagen"
          handleClick={handleSubmitOwn}
        />
      </div>
    </form>
  )
}
