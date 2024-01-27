import EventList from '@/components/events/event.list'
import Metadata from '@/components/metadata'
import { getFeaturedEvents } from '@/utils/api-action'
import { convertDataToArray } from '@/utils/format'

export default function Homepage({ events }) {
  return (
    <main>
      <Metadata />
      <EventList items={events} />
    </main>
  )
}

export async function getServerSideProps() {
  const response = await getFeaturedEvents()
  const events = convertDataToArray(response)

  return {
    props: {
      events
    }
  }
}
