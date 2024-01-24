import React from 'react'

function BannerTop() {
  return (
    <div className="w-full bg-primary">
      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-5 py-3">
        <div className="flex justify-center lg:justify-between items-center p-0 my-0">
          <p className="hidden lg:flex text-center text-white text-xs m-0 uppercase font-bold">
            😲 Delivery Lima y Provincia 😲
          </p>
          <p className="text-center text-green-500 text-xs m-0 uppercase font-bold">
            ✨ Envíos de 24 - 48 horas ✨
          </p>
          <p className="hidden lg:flex text-center text-white text-xs m-0 uppercase font-bold">
            Contáctanos 🤳
          </p>
        </div>
      </div>
    </div>
  )
}

export default React.memo(BannerTop)
