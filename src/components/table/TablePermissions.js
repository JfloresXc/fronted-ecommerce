'use client'

import { usePermissions } from '@/hooks/usePermissions'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import Button from '../button'
import Select from '../form/Select'
import { useRoles } from '@/hooks/useRoles'
import { ToggleInput } from '../form/Toggle'

export default function TablePermissions() {
  const { register, handleSubmit, setValue } = useForm({
    mode: 'onChange',
  })
  const { getPermissionssForIdRole, getModulesAndActions, editPermissions } =
    usePermissions()
  const { getActivedRoles } = useRoles()
  const [roles, setRoles] = useState([])
  const [permissions, setPermissions] = useState([])

  useEffect(() => {
    getActivedRoles().then((data) => {
      if (data?.length > 0) {
        setRoles(data)
        const [firstRole] = data
        setValue('idRole', firstRole?.id)
        getAllModulesAndActions().then(() => {
          getPermissions({ idRole: firstRole.id })
        })
      }
    })
  }, [])

  const getAllModulesAndActions = async () => {
    const data = await getModulesAndActions()
    const { modules, actions } = data

    const permissionsByModule = modules.map((module) => {
      const permissionsByAction = actions.map((action) => {
        return {
          ...action,
        }
      })
      return {
        ...module,
        actions: permissionsByAction,
      }
    })
    setPermissions(permissionsByModule)
  }

  const getPermissions = ({ idRole }) => {
    getPermissionssForIdRole({ idRole }).then((data) => {
      const { modules, actions, permissions } = data

      modules.forEach((module) => {
        actions.forEach((action) => {
          const permission = permissions.find(({ codeAction, codeModule }) => {
            return codeAction === action.code && codeModule === module.code
          })

          setValue(`control-${action.code}-${module.code}`, Boolean(permission))
        })
      })
    })
  }

  const handleChangeRole = (event) => {
    const idRole = event.target.value
    getPermissions({ idRole })
  }

  const handleSubmitOwn = async (data) => {
    const idRole = data?.idRole
    delete data.idRole

    const keys = Object.keys(data)
    const values = Object.values(data)
    let permissions = keys.map((key, index) => {
      const codeAction = key.split('-')[1]
      const codeModule = key.split('-')[2]
      return { codeAction, codeModule, isChecked: Boolean(values[index]) }
    })

    permissions = permissions.filter(({ isChecked }) => isChecked)
    await editPermissions({
      permissionsWhithoutRole: permissions,
      idRole,
    })
  }

  return (
    <div class="relative overflow-x-auto sm:rounded-lg">
      <form onSubmit={handleSubmit(handleSubmitOwn)}>
        <div className="flex justify-between align-center mb-5">
          <h2 class="text-brand-dark text-base lg:text-lg xl:text-[20px] font-semibold xl:leading-8 mb-5 md:mb-6 lg:mb-7 lg:-mt-1">
            Permisos
          </h2>
          <Button label={'Guardar'} type="submit" />
        </div>
        <Select
          items={roles}
          validations={{
            ...register('idRole', {
              onChange: handleChangeRole,
            }),
          }}
        />
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Módulo
              </th>
              <th scope="col" class="px-6 py-3">
                Detalle/Acción
              </th>
              <th scope="col" class="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {permissions?.map(
              ({ id, name: moduleName, code: moduleCode, actions }) => (
                <tr
                  key={id}
                  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {moduleName}
                  </th>
                  <td class="px-6 py-4">
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                      <tbody>
                        {actions?.map(
                          ({ id, name: actionName, code: actionCode }) => {
                            return (
                              <tr
                                key={id}
                                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                              >
                                <th
                                  scope="row"
                                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                  {actionName} {moduleName}
                                </th>
                                <td class="px-6 py-4">
                                  <div class="flex items-center justify-center">
                                    <ToggleInput
                                      validations={{
                                        ...register(
                                          `control-${actionCode}-${moduleCode}`
                                        ),
                                      }}
                                    />
                                  </div>
                                </td>
                              </tr>
                            )
                          }
                        )}
                      </tbody>
                    </table>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </form>
    </div>
  )
}
