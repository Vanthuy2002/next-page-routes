import Metadata from '@/components/metadata'
import Link from 'next/link'
import styles from './page.module.css'

export default function Homepage() {
  return (
    <main>
      <Metadata />
      <h1>Hello World</h1>
      <Link href='blog/uuid-adsd-fdfd'>
        <span className={styles.btn}>See More</span>
      </Link>
    </main>
  )
}
