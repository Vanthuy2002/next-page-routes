import classes from './css/content.module.css'

export default function EventContent({ children }) {
  return <section className={classes.content}>{children}</section>
}
