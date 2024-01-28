import classes from './css/item.module.css'
import Button from '../button'
import { useRouter } from 'next/router'
import Image from 'next/image'

const convertDateToHuman = (date) =>
  new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
const convertAddres = (location) => location.replace(', ', '\n')

export default function EventItem({ event }) {
  const dateHumanRead = convertDateToHuman(event.date)
  const addrFomart = convertAddres(event.location)

  const routes = useRouter()
  const showDetailEvent = (link) => {
    routes.push(link)
  }
  return (
    <li className={classes.item}>
      <Image
        src={event.image}
        alt={event.title}
        width={250}
        height={160}
        priority
      />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{event.title}</h2>
          <div className={classes.date}>
            <time>{dateHumanRead}</time>
          </div>
          <div className={classes.address}>
            <address>{addrFomart}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button onClick={() => showDetailEvent(`/events/${event.id}`)}>
            Details
          </Button>
        </div>
      </div>
    </li>
  )
}
