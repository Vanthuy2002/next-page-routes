import Head from 'next/head'

export default function Metadata({
  title = 'My Next App',
  description = 'Web app was build by Nextjs'
}) {
  return (
    <Head>
      <title>{title}</title>
      <link rel='icon' href='/favicon.ico' />
      <meta name='description' content={description} />
    </Head>
  )
}
