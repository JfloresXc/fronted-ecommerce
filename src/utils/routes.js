const {
  ClipboardDocumentIcon,
  Bars3BottomLeftIcon,
} = require('@heroicons/react/24/outline')

export const ROUTES = [
  {
    title: 'Permisos',
    icon: <ClipboardDocumentIcon />,
    href: '/account/permissions',
  },
  {
    title: 'Roles',
    icon: <Bars3BottomLeftIcon />,
    href: '/account/roles',
  },
  {
    title: 'Usuarios',
    icon: <Bars3BottomLeftIcon />,
    href: '/account/users',
  },
  {
    title: 'Reestablecer contraseña',
    icon: <Bars3BottomLeftIcon />,
    href: '/account/changepassword',
  },
]
