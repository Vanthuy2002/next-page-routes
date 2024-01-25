import { Fragment } from 'react'
import MainHeader from './header'

export default function Layout({ children }) {
  return (
    <Fragment>
      <MainHeader />
      <main>{children}</main>
    </Fragment>
  )
}
