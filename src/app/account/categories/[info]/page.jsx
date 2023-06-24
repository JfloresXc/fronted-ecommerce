import { getParams } from '@/utils/crud'
import FormCategory from '@/components/form/FormCategory'

export default function Page({ params }) {
  const { info = 'U1234' } = params
  const { action, id } = getParams(info)

  return (
    <>
      {action === 'P' ? (
        <h1>Preview {id}</h1>
      ) : (
        <FormCategory id={id} action={action} />
      )}
    </>
  )
}
