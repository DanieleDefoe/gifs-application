import { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import './Layout.css'

export default function Layout() {
  return (
    <Fragment>
      <Outlet />
      <Header />
    </Fragment>
  )
}
