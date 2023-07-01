import { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import Main from '../Main/Main'
import './Layout.css'

export default function Layout() {
  return (
    <Fragment>
      <Header />
      <Main>
        <Outlet />
      </Main>
    </Fragment>
  )
}
