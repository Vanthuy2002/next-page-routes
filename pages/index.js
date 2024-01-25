import Metadata from '@/components/metadata'
import Link from 'next/link'
import styles from './page.module.css'

export default function Homepage() {
  return (
    <main>
      <Metadata />
      <h1>Hello World</h1>
      <Link className={styles.btn} href='blog/uuid-adsd-fdfd'>
        Read More
      </Link>
    </main>
  )
}
