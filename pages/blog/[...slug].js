import Metadata from '@/components/metadata'
import { useRouter } from 'next/router'

export default function BlogDetails() {
  const routes = useRouter()
  console.log(routes.query)
  return (
    <div>
      <Metadata title='Blog details' />
      <h1>Blog pages details with </h1>
    </div>
  )
}
