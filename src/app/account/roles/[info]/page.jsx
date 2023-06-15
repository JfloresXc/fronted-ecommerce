import { getParams } from '@/utils/crud'
import FormRole from '@/components/form/FormRole'

export default function Page({ params }) {
  const { info = 'U1234' } = params
  const { action, id } = getParams(info)

  return (
    <>
      {action === 'P' ? (
        <h1>Preview {id}</h1>
      ) : (
        <FormRole id={id} action={action} />
      )}
    </>
  )
}
