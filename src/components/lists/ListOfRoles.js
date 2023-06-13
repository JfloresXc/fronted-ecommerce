'use client'

import classNames from 'classnames'
import Dropdown from '../dropdown'
import DataTable from '../datatable/Datatable'

const COLUMNS = [
  {
    accessorKey: 'name',
    header: () => <span>Nombre</span>,
    cell: (info) => <span className="font-bold">{info.getValue()}</span>,
  },
  {
    accessorKey: 'description',
    header: () => <span>Descripción</span>,
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
          <Dropdown
            linkEdit={`/account/roles/${id}`}
            linkDelete={`/account/roles/${id}`}
          />
        </div>
      )
    },
    enableSorting: false,
  },
]

export default function ListOfRoles({ roles = [] }) {
  return (
    <DataTable
      title="Roles"
      subtitle="Lista de roles de usuario registrados en el sistema"
      columns={COLUMNS}
      data={roles}
    />
  )
}
