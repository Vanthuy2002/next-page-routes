import Link from 'next/link'

export default function NotFoundPage() {
  return (
    <main className='not-found'>
      <h1>Can't not find pages, please make sure type correct</h1>
      <Link href='/'>
        <span className='not-found-link'>Back to Home</span>
      </Link>
    </main>
  )
}
