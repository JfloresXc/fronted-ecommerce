import Section from '@/components/secction'

export default function Page({ params }) {
  const { id } = params
  return (
    <Section>
      <h1>Roles {id}</h1>
    </Section>
  )
}
