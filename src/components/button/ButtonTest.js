'use client'

const handleClick = () => {
  fetch('/api/auth/nn')
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      // Realiza las operaciones con los datos de la respuesta
    })
    .catch((error) => {
      console.log(error)
      // Maneja el error en caso de que ocurra
    })
}

export default function ButtonTest() {
  return <button onClick={handleClick}>Llamar a la API</button>
}
