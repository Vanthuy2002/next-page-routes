import EventContent from '@/components/event-detail/event-content'
import EventLogistics from '@/components/event-detail/event-logictic'
import EventSummary from '@/components/event-detail/event-summary'
import Metadata from '@/components/metadata'
import { getAllEvents, getDetailEvent } from '@/utils/api-action'
import { convertDataToArray } from '@/utils/format'
import { Fragment } from 'react'

export default function EventDetailPages({ event }) {
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

export async function getStaticPaths() {
  const events = await getAllEvents()
  const transformed = convertDataToArray(events)
  const paths = transformed.map((item) => ({ params: { id: item.id } }))

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps(context) {
  const { params } = context
  const eventId = params.id

  const event = await getDetailEvent(eventId)
  return {
    props: {
      event
    }
  }
}
