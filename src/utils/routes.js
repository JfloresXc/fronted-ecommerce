const {
  ClipboardDocumentIcon,
  Bars3BottomLeftIcon,
} = require('@heroicons/react/24/outline')

export const ROUTES = [
  {
    title: 'Permisos',
    icon: <ClipboardDocumentIcon />,
    href: '/admin/permissions',
  },
  {
    title: 'Roles',
    icon: <Bars3BottomLeftIcon />,
    href: '/admin/roles',
  },
  {
    title: 'Usuarios',
    icon: <Bars3BottomLeftIcon />,
    href: '/admin/users',
  },
  {
    title: 'Familias',
    icon: <Bars3BottomLeftIcon />,
    href: '/admin/families',
  },
  {
    title: 'Categorías',
    icon: <Bars3BottomLeftIcon />,
    href: '/admin/categories',
  },
  {
    title: 'Productos',
    icon: <Bars3BottomLeftIcon />,
    href: '/admin/products',
  },
  {
    title: 'Reestablecer contraseña',
    icon: <Bars3BottomLeftIcon />,
    href: '/admin/changepassword',
  },
]
