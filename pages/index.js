import Metadata from '@/components/metadata'
import { getFeaturedEvents } from '@/resources/static'

export default function Homepage() {
  const featureEvents = getFeaturedEvents()
  return (
    <main>
      <Metadata />
      <ul></ul>
    </main>
  )
}
