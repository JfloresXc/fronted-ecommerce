import { getParams } from '@/utils/crud'
import FormProduct from '@/components/form/FormProduct'

export default function Page({ params }) {
  const { info = 'U1234' } = params
  const { action, id } = getParams(info)

  return (
    <>
      {action === 'P' ? (
        <h1>Preview {id}</h1>
      ) : (
        <FormProduct id={id} action={action} />
      )}
    </>
  )
}
