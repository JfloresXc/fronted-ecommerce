import { useState } from 'react'
import ModalContent from './ModalContent'
import Button from '../button'
import FormOrder from '../form/FormOrder'

const ModalOrder = ({
  label = 'Abrir modal',
  product: { name = 'Not name' },
}) => {
  const [modalOpen, setModalOpen] = useState(false)

  const openModal = () => setModalOpen(true)

  const closeModal = () => setModalOpen(false)

  return (
    <div className="z-20">
      <Button
        label={label}
        type="button"
        width="100%"
        handleClick={openModal}
      />

      <ModalContent
        isOpen={modalOpen}
        onClose={closeModal}
        title={'Producto ' + name}
      >
        <hr className="mt-3 mb-3 border-b-1 border-blueGray-300" />
        <FormOrder />
      </ModalContent>
    </div>
  )
}

export default ModalOrder
