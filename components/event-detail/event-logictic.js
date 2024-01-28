import Image from 'next/image'
import classes from './css/logictic.module.css'

function EventLogistics(props) {
  const { date, address, image, imageAlt } = props

  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
  const addressText = address.replace(', ', '\n')

  return (
    <section className={classes.logistics}>
      <div className={classes.image}>
        <Image src={image} alt={imageAlt} width={320} height={320} />
      </div>
      <ul className={classes.list}>
        <time>{humanReadableDate}</time>
        <address>{addressText}</address>
      </ul>
    </section>
  )
}

export default EventLogistics
