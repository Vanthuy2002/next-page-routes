import EventsSearch from '@/components/event-detail/event-search'
import EventList from '@/components/events/event.list'
import Metadata from '@/components/metadata'
import { getAllEvents } from '@/resources/static'
import { useRouter } from 'next/router'

export default function EventPages() {
  const allEvents = getAllEvents()
  const routes = useRouter()

  const onSearch = (year, month) => {
    const fullPath = `/events/${year}/${month}`
    routes.push(fullPath)
  }
  return (
    <main>
      <Metadata title='Explore all events' description='Page show all events' />
      <EventsSearch onSearch={onSearch}></EventsSearch>
      <EventList items={allEvents} />
    </main>
  )
}
