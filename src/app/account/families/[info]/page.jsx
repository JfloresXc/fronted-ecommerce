import { getParams } from '@/utils/crud'
import FormFamily from '@/components/form/FormFamily'

export default function Page({ params }) {
  const { info = 'U1234' } = params
  const { action, id } = getParams(info)

  return (
    <>
      {action === 'P' ? (
        <h1>Preview {id}</h1>
      ) : (
        <FormFamily id={id} action={action} />
      )}
    </>
  )
}
