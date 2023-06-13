import { useState, useId } from 'react'
import Button from '@/components/button'

function InputGroup({ handleChange, name, label, placeholder, type = 'text' }) {
  const inputId = useId(1, 'input-group-')

  return (
    <>
      <div className="form-group">
        <label className="col-form-label-sm" htmlFor={inputId}>
          {label}
        </label>
        <input
          type={type}
          id={inputId}
          name={name}
          onChange={handleChange}
          className="form-control form-control-sm"
          placeholder={placeholder}
        />
      </div>
      <style jsx>{`
        .form-group {
          flex: 1 1 300px;
        }
      `}</style>
    </>
  )
}

// function InputGroup ({ handleChange, name, label, placeholder, type = 'text' }) {
//   const inputId = useId(1, 'input-group-')

//   return <>
//     <div className="form-group">
//       <label
//           className="col-form-label-sm"
//           htmlFor={inputId}
//       >
//         {label}
//       </label>
//       <input
//           type={type}
//           id={inputId}
//           name={name}
//           onChange={handleChange}
//           className="form-control form-control-sm"
//           placeholder={placeholder}
//       />
//     </div>
//     <style jsx>{`
//       .form-group{
//             flex: 1 1 300px;
//       }
//     `}</style>
//   </>
// }

export default function FormProduct() {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  })

  const handleSubmit = async (event) => {
    event.preventDefault()
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setCredentials({ ...credentials, [name]: value })
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <div className="form__items">
          <InputGroup
            name={'name'}
            label={'Nombre'}
            placeholder={'Nombre'}
            handleChange={handleChange}
          />

          <InputGroup
            name={'description'}
            label={'Descripción'}
            placeholder={'Descripción'}
            handleChange={handleChange}
          />

          <InputGroup
            name={'brand'}
            label={'Marca'}
            placeholder={'Marca'}
            handleChange={handleChange}
          />

          <InputGroup
            name={'price'}
            label={'Precio'}
            placeholder={'Precio'}
            handleChange={handleChange}
            type="number"
          />

          <InputGroup
            name={'priceBefore'}
            label={'Precio antes'}
            placeholder={'Precio antes'}
            handleChange={handleChange}
            type="number"
          />

          <InputGroup
            name={'discountPercentage'}
            label={'Porcentaje de descuento'}
            placeholder={'Porcentaje de descuento'}
            handleChange={handleChange}
            type="number"
          />

          <InputGroup
            name={'stock'}
            label={'Stock'}
            placeholder={'Stock'}
            handleChange={handleChange}
            type="number"
          />

          <InputGroup
            name={'rating'}
            label={'Cantidad de estrellas'}
            placeholder={'Cantidad de estrellas'}
            handleChange={handleChange}
            type="number"
          />

          <div className="form-group">
            <input
              id="customCheckLogin"
              type="checkbox"
              className="mr-1 form-checkbox"
              name="state"
            />
            <label>Estado</label>
          </div>
        </div>

        <div className="text-center mt-6">
          <Button label="Iniciar sesión" type="subtmit" full={true} />
        </div>
      </form>
      <style jsx>
        {`
          .form {
            box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
            padding: 1.5rem;
          }
          .form__items {
            display: flex;
            flex-flow: row wrap;
            gap: 1em 5em;
            width: 100%;
          }
        `}
      </style>
    </>
  )
}
