import EventsSearch from '@/components/event-detail/event-search'
import EventList from '@/components/events/event.list'
import Metadata from '@/components/metadata'
import { getAllEvents } from '@/utils/api-action'
import { convertDataToArray } from '@/utils/format'
import { useRouter } from 'next/router'

export default function EventPages({ events }) {
  const routes = useRouter()

  const onSearch = (year, month) => {
    const fullPath = `/events/${year}/${month}`
    routes.push(fullPath)
  }
  return (
    <main>
      <Metadata title='Explore all events' description='Page show all events' />
      <EventsSearch onSearch={onSearch} />
      <EventList items={events} />
    </main>
  )
}

export async function getServerSideProps() {
  const data = await getAllEvents()
  const transformedEvents = convertDataToArray(data)

  return {
    props: {
      events: transformedEvents
    }
  }
}
