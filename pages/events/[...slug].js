import EventList from '@/components/events/event.list'
import NotFoundItem from '@/components/notfound'
import { getFilteredEvents } from '@/utils/api-action'

export default function FilterEvents({ events }) {
  if (!events || events.length === 0) {
    return <NotFoundItem />
  }
  return <EventList items={events} />
}

export async function getServerSideProps(context) {
  const { params } = context
  const [year, month] = params.slug
  const dateFilter = [parseInt(year), parseInt(month)]

  const events = await getFilteredEvents(dateFilter)

  return {
    props: {
      events
    }
  }
}
