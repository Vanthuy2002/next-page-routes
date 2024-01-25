import Layout from '@/components/layout'
import '@/styles/global.css'
import NextNProgress from 'nextjs-progressbar'

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <NextNProgress />
      <Component {...pageProps} />
    </Layout>
  )
}
