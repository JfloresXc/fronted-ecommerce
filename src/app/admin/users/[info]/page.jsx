import { getParams } from '@/utils/crud'
import FormUser from '@/components/form/FormUser'

export default function Page({ params }) {
  const { info = 'U1234' } = params
  const { action, id } = getParams(info)

  return (
    <>
      {action === 'P' ? (
        <h1>Preview {id}</h1>
      ) : (
        <FormUser id={id} action={action} />
      )}
    </>
  )
}
