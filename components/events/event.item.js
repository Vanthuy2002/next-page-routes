import Link from 'next/link'
import classes from './css/item.module.css'

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
  return (
    <li className={classes.item}>
      <img src={event.image} alt={event.title} />
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
          <Link href={`/events/${event.id}`}>
            <span>Details</span>
          </Link>
        </div>
      </div>
    </li>
  )
}
