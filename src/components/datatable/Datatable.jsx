'use client'

import React, { useEffect, useState } from 'react'
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
  getFilteredRowModel,
  getSortedRowModel,
} from '@tanstack/react-table'
import defaultData from '@/mocks/data.json'
import classNames from 'classnames'
import { rankItem } from '@tanstack/match-sorter-utils'
import {
  MagnifyingGlassIcon,
  ChevronDoubleLeftIcon,
  ChevronLeftIcon,
  ChevronDoubleRightIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/solid'
import Dropdown from '../dropdown'
import {
  BarsArrowDownIcon,
  BarsArrowUpIcon,
  ChevronUpDownIcon,
} from '@heroicons/react/24/outline'
import Button from '../button'

const COLUMNS_DEFAULT = [
  {
    accessorKey: 'name',
    header: () => <span>Nombre</span>,
    cell: (info) => <span className="font-bold">{info.getValue()}</span>,
  },
  {
    accessorKey: 'lastName',
    header: () => <span>Apellidos</span>,
  },
  {
    accessorKey: 'age',
    header: () => <span>Edad</span>,
  },
  {
    accessorKey: 'status',
    header: () => <span>Estado</span>,
    cell: (info) => {
      const inactivo = 'Inactivo'
      const activo = 'Activo'
      return (
        <span
          className={classNames({
            'text-xs text-slate-50 font-medium mr-2 px-2.5 py-0.5 rounded border': true,
            'bg-red-100  text-red-400 border-red-400':
              inactivo === info.getValue(),
            'bg-green-100 text-green-400 border-green-400':
              activo === info.getValue(),
          })}
        >
          {info.getValue()}
        </span>
      )
    },
    enableSorting: true,
  },
  {
    accessorKey: 'id',
    header: 'Acciones',
    cell: (info) => {
      return (
        <div className="space-x-2">
          <Dropdown linkEdit={`account/roles/e${info.getValue()}`} />
        </div>
      )
    },
    enableSorting: false,
  },
]

const fuzzyFilter = (row, columnId, value, addMeta) => {
  const itemRank = rankItem(row.getValue(columnId), value)

  addMeta({ itemRank })

  return itemRank.passed
}

const DebouncedInput = ({ value: keyWord, onChange, ...props }) => {
  const [value, setValue] = useState(keyWord)

  useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value)
    }, 500)

    return () => clearTimeout(timeout)
  }, [value, 100])

  return (
    <input
      {...props}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  )
}

const DataTable = ({
  title = 'Not title',
  subtitle = 'Not subtitle',
  data = defaultData,
  columns = COLUMNS_DEFAULT,
  linkRefActionAdd = '/account/roles/a',
}) => {
  const [globalFilter, setGlobalFilter] = useState('')
  const [sorting, setSorting] = useState([])

  const getStateTable = () => {
    const totalRows = table.getFilteredRowModel().rows.length
    const pageSize = table.getState().pagination.pageSize
    const pageIndex = table.getState().pagination.pageIndex
    const rowsPerPage = table.getRowModel().rows.length

    const firstIndex = pageIndex * pageSize + 1
    const lastIndex = pageIndex * pageSize + rowsPerPage

    return {
      totalRows,
      firstIndex,
      lastIndex,
    }
  }

  const table = useReactTable({
    data,
    columns,
    state: {
      globalFilter,
      sorting,
    },
    initialState: {
      pagination: {
        pageSize: 10,
      },
    },
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    globalFilterFn: fuzzyFilter,
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
  })

  return (
    <div className="w-full rounded overflow-hidden  bg-white">
      <div className="mb-6 flex flex-col justify-between gap-8 md:flex-row md:items-center">
        <div className="">
          <h5 className="text-2xl text-blue-gray">{title}</h5>
          <h6 className="mt-1 font-normal">{subtitle}</h6>
        </div>
        <div className="relative">
          <div className="w-full md:w-72">
            <DebouncedInput
              type="text"
              value={globalFilter ?? ''}
              onChange={(value) => setGlobalFilter(String(value))}
              className="py-2 pr-3 pl-8 text-gray-600 border rounded outline-primary"
              placeholder="Buscar..."
            />
            <MagnifyingGlassIcon className="w-4 h-4 absolute top-3 left-2.5" />
          </div>
        </div>
        <Button label={'Agregar'} location={linkRefActionAdd} />
      </div>
      <div className="overflow-auto h-[500px]">
        <table className=" w-full min-w-max table-auto text-left">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                  >
                    {header.isPlaceholder ? null : (
                      <div
                        className={classNames({
                          'font-normal leading-none opacity-70 text-start flex items-center space-x-1 cursor-pointer':
                            header.column.getCanSort(),
                        })}
                        onClick={header.column.getToggleSortingHandler()}
                      >
                        <small className="font-normal leading-none opacity-70 text-blue-gray">
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                        </small>
                        <span>
                          {{
                            asc: <BarsArrowUpIcon className="w-4 h-4" />,
                            desc: <BarsArrowDownIcon className="w-4 h-4" />,
                          }[header.column.getIsSorted()] ??
                            (header.column.getCanSort() ? (
                              <ChevronUpDownIcon className="w-4 h-4" />
                            ) : null)}
                        </span>
                      </div>
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="text-gray-600 hover:bg-slate-100">
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="py-2 px-4">
                    <small className="font-normal leading-none text-blue-gray">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </small>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="p-4 py-6 flex flex-col md:flex-row items-center justify-between gap-5 text-center">
        <div className="flex align-center justify-center gap-2">
          <button
            className="text-sm text-gray-600 bg-gray-200 py-0.5 px-1 rounded border border-gray-300
            disabled:hover:bg-white disabled:hover:text-gray-300"
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
          >
            <ChevronDoubleLeftIcon className="w-4 h-4" />
          </button>
          <button
            className="text-sm text-gray-600 bg-gray-200 py-0.5 px-1 rounded border border-gray-300
            disabled:hover:bg-white disabled:hover:text-gray-300"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <ChevronLeftIcon className="w-4 h-4" />
          </button>

          {table.getPageOptions().map((value, key) => (
            <button
              key={key}
              className={classNames({
                'inline-flex items-center justify-center text-sm rounded border border-gray-300 disabled:hover:bg-white disabled:hover:text-gray-500 w-7 h-7': true,
                'bg-gray-300 ': value === table.getState().pagination.pageIndex,
              })}
              onClick={() => table.setPageIndex(value)}
            >
              {value + 1}
            </button>
          ))}

          <button
            className="text-sm text-gray-600 bg-gray-200 py-0.5 px-1 rounded border border-gray-300
            disabled:hover:bg-white disabled:hover:text-gray-300"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <ChevronRightIcon className="w-4 h-4" />
          </button>
          <button
            className="text-gray-600 bg-gray-200 py-0.5 px-1 rounded border border-gray-300
            disabled:hover:bg-white disabled:hover:text-gray-300"
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
          >
            <ChevronDoubleRightIcon className="w-4 h-4" />
          </button>
        </div>
        <small className="m-0">
          Mostrando de {getStateTable().firstIndex}&nbsp; a{' '}
          {getStateTable().lastIndex}&nbsp; del total de{' '}
          {getStateTable().totalRows} registros
        </small>
        <select
          className="w-full md:w-36 border-0 px-3 py-3 m-0 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring  ease-linear transition-all duration-150"
          onChange={(e) => {
            table.setPageSize(Number(e.target.value))
          }}
          defaultValue={'10'}
        >
          <option value="5">5 pág.</option>
          <option value="10">10 pág.</option>
          <option value="20">20 pág.</option>
          <option value="25">25 pág.</option>
          <option value="50">50 pág.</option>
        </select>
      </div>
    </div>
  )
}

export default DataTable
