import Metadata from '@/components/metadata'
import { getEventById } from '@/resources/static'
import { useRouter } from 'next/router'

export default function EventDetailPages() {
  const routes = useRouter()
  const { id } = routes.query
  const event = getEventById(id)

  return (
    <main>
      <Metadata title={event.title} />
      <h1>{event.title}</h1>
    </main>
  )
}
