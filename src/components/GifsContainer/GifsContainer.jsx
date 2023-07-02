import { Fragment } from 'react'
import Pangination from '../Pangination/Pangination'
import './GifsContainer.css'

export default function GifsContainer({ children }) {
  return (
    <Fragment>
      <section className="gifs-container">{children}</section>
      <Pangination />
    </Fragment>
  )
}
