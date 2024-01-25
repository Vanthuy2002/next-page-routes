import EventContent from '@/components/event-detail/event-content'
import EventLogistics from '@/components/event-detail/event-logictic'
import EventSummary from '@/components/event-detail/event-summary'
import Metadata from '@/components/metadata'

import { getEventById } from '@/resources/static'
import { useRouter } from 'next/router'
import { Fragment } from 'react'

export default function EventDetailPages() {
  const routes = useRouter()
  const { id } = routes.query
  const event = getEventById(id)

  if (!event) {
    return <p>Not found events</p>
  }

  return (
    <Fragment>
      <Metadata title={event.title} description={event.description} />
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  )
}
