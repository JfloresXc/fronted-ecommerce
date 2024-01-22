'use client'

import classNames from 'classnames'
import Dropdown from '../dropdown'
import DataTable from '../datatable/Datatable'

const MONEDA = 'S/.'
const COLUMNS = [
  {
    accessorKey: 'name',
    header: () => <span>Nombre</span>,
    cell: (info) => <span className="font-bold">{info.getValue()}</span>,
  },
  {
    accessorKey: 'price',
    header: () => <span>Precio</span>,
    cell: (info) => (
      <span>
        {MONEDA} {info?.getValue()}
      </span>
    ),
  },
  {
    accessorKey: 'nameCategory',
    header: () => <span>Categoría</span>,
    cell: (info) => {
      let text = info.getValue() ?? ''
      // text = text?.name ?? ''
      text = text.slice(0, 25) + '...'
      return <span>{text}</span>
    },
  },
  {
    accessorKey: 'state',
    header: () => <span>Estado</span>,
    cell: (info) => {
      const inactivo = 0
      const activo = 1
      return (
        <span
          className={classNames({
            'text-xs text-gray-600 font-medium mr-2 px-2.5 py-0.5 rounded border': true,
            'bg-red-100 border-red-400': inactivo === info.getValue(),
            'bg-green-100 border-green-400': activo === info.getValue(),
          })}
        >
          {info.getValue() ? 'Activo' : 'Inactivo'}
        </span>
      )
    },
    enableSorting: true,
  },
  {
    accessorKey: 'id',
    header: 'Acciones',
    cell: (info) => {
      const id = info.getValue()
      return (
        <div className="space-x-2">
          <Dropdown linkEdit={`/admin/products/e${id}`} />
        </div>
      )
    },
    enableSorting: false,
  },
]

export default function ListOfProducts({ data = [] }) {
  return (
    <>
      <DataTable
        title="Productos"
        subtitle="Lista de productos registrados en el sistema"
        columns={COLUMNS}
        data={data}
        linkRefActionAdd="/admin/products/a"
      />
    </>
  )
}
