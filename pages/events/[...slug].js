import EventList from '@/components/events/event.list'
import { getFilteredEvents } from '@/resources/static'
import { useRouter } from 'next/router'

export default function FilterEvents() {
  const routes = useRouter()
  const [year, month] = routes.query.slug
  const dateFilter = [parseInt(year), parseInt(month)]

  const events = getFilteredEvents(dateFilter)
  if (!events || events.length === 0) {
    return (
      <p style={{ margin: '3rem' }} className='center'>
        Not found event, try again
      </p>
    )
  }
  return <EventList items={events} />
}
