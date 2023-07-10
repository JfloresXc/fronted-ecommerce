import React from 'react'

export default function Filters() {
  return (
    <div className="block mb-3">
      <div className="flex items-center justify-between mb-4 -mt-1">
        <h3 className="text-dark text-15px sm:text-base font-semibold">
          Filtros
        </h3>
        <button
          className="flex-shrink transition duration-150 ease-in text-[13px] focus:outline-none hover:text-dark"
          aria-label="Clear All"
        >
          Limpiar Todo
        </button>
      </div>
      <div className="flex flex-wrap -m-1">
        <div className="group flex shrink-0 m-1 items-center border border-border-base rounded-lg text-[13px] px-2.5 py-1.5 capitalize text-dark cursor-pointer transition duration-200 ease-in-out hover:border-brand">
          diet-nutrition
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            className="text-sm text-body ltr:ml-2 rtl:mr-2 shrink-0 ltr:-mr-0.5 rtl:-ml-0.5 mt-0.5 transition duration-200 ease-in-out group-hover:text-heading"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"></path>
          </svg>
        </div>
        <div className="group flex shrink-0 m-1 items-center border border-border-base rounded-lg text-[13px] px-2.5 py-1.5 capitalize text-dark cursor-pointer transition duration-200 ease-in-out hover:border-brand">
          whole-eggs
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            className="text-sm text-body ltr:ml-2 rtl:mr-2 shrink-0 ltr:-mr-0.5 rtl:-ml-0.5 mt-0.5 transition duration-200 ease-in-out group-hover:text-heading"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"></path>
          </svg>
        </div>
        <div className="group flex shrink-0 m-1 items-center border border-border-base rounded-lg text-[13px] px-2.5 py-1.5 capitalize text-dark cursor-pointer transition duration-200 ease-in-out hover:border-brand">
          boiled-potatoes
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            className="text-sm text-body ltr:ml-2 rtl:mr-2 shrink-0 ltr:-mr-0.5 rtl:-ml-0.5 mt-0.5 transition duration-200 ease-in-out group-hover:text-heading"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"></path>
          </svg>
        </div>
      </div>
    </div>
  )
}
