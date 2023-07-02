import { Fragment } from 'react'
import Pangination from '../Pangination/Pangination'
import './GifsContainer.css'

export default function GifsContainer({ children, onLoad }) {
  return (
    <Fragment>
      <section className="gifs-container" onLoad={onLoad}>
        {children}
      </section>
      <Pangination />
    </Fragment>
  )
}
