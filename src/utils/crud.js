export const ACTTIONS = {
  a: 'Add',
  e: 'Edit',
  p: 'Preview',
  c: 'Clone',
  r: 'Read',
  d: 'Delete',
}

export const VALIDATE_ACTIONS = {
  isActionEdit: (action) => action === 'e',
  isActionAdd: (action) => action === 'a',
  isActionPreview: (action) => action === 'p',
  isActionClone: (action) => action === 'c',
}

export const getParams = (info) => {
  const action = info?.substring(0, 1)
  const id = info?.substring(1)
  return { action, id }
}

export const getNameAction = ({ action }) => {
  switch (action) {
    case 'a':
      return 'Agregar'
    case 'e':
      return 'Editar'
    case 'c':
      return 'Clonar'
    default:
      return 'Action not found'
  }
}

export const getValidateAction = ({ action }) => {
  return {
    isActionEdit: action === 'e',
    isActionAdd: action === 'a',
    isActionPreview: action === 'p',
    isActionClone: action === 'c',
  }
}
