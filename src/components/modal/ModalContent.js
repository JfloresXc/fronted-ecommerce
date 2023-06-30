import { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'

export default function ModalContent({ isOpen, onClose, title, children }) {
  const [modalOpen, setModalOpen] = useState(isOpen)

  useEffect(() => {
    setModalOpen(isOpen)
  }, [isOpen])

  const closeModal = () => {
    setModalOpen(false)
    onClose()
  }

  if (!modalOpen) {
    return null
  }

  return ReactDOM.createPortal(
    <>
      <div className="fixed inset-0 flex justify-center m-3 z-50">
        <div className="fixed inset-0 bg-gray-900 opacity-50"></div>
        <div className="min-w-[60%] bg-white p-4 rounded-lg shadow-lg z-10 relative z-50 inline-block w-full p-4 overflow-y-scroll align-middle transition-all transform md:w-auto md:p-6 xl:p-8 opacity-100 scale-100">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-medium leading-5">{title}</h2>
            <button
              className="text-gray-500 hover:text-gray-700"
              onClick={closeModal}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div>{children}</div>
        </div>
      </div>
    </>,
    document.getElementById('portal-modal')
  )
}
