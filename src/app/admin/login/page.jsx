import FormLogin from '@/components/form/FormLogin'
import Section from '@/components/section'

export const metadata = {
  title: 'Socoro Home | Login Admin',
  description:
    'Administrador de Socoro Home. Gestiona los usuarios, los productos y las ordenes.',
}

export default function LoginContent() {
  return (
    <Section>
      <FormLogin />
    </Section>
  )
}
