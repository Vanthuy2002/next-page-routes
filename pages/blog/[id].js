import Metadata from '@/components/metadata'
import { useRouter } from 'next/router'

export default function BlogDetails() {
  const routes = useRouter()

  return (
    <div>
      <Metadata title='Blog details' />
      <h1>Blog pages details with {routes.query.id}</h1>
    </div>
  )
}
