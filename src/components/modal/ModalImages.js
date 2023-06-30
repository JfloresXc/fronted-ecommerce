import { useState } from 'react'
import ModalContent from './ModalContent'
import Button from '../button'
import TabImages from '../tabs/TabImages'

const ModalImages = ({
  label = 'Abrir modal',
  product: { name = 'Not name', idProduct },
}) => {
  const [modalOpen, setModalOpen] = useState(false)

  const openModal = () => setModalOpen(true)

  const closeModal = () => setModalOpen(false)

  return (
    <div>
      <Button label={label} type="button" handleClick={openModal} />

      <ModalContent
        isOpen={modalOpen}
        onClose={closeModal}
        title={'Producto ' + name}
      >
        <hr className="mt-3 mb-3 border-b-1 border-blueGray-300" />
        <TabImages idProduct={idProduct} />
      </ModalContent>
    </div>
  )
}

export default ModalImages
