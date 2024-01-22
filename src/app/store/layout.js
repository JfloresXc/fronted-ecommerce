import StoreLayout from '@/components/layouts-own/StoreLayout'
import CartContext from '@/contexts/CartContext'
import FilteredProductsContext from '@/contexts/FilteredProductsContext'

function Content({ children }) {
  return <StoreLayout>{children}</StoreLayout>
}

export default function LayoutStore({ children }) {
  return (
    <CartContext>
      <FilteredProductsContext>
        <Content>{children}</Content>
      </FilteredProductsContext>
    </CartContext>
  )
}
