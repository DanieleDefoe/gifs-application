import { Fragment, useEffect, useRef } from 'react'
import Pangination from '../Pangination/Pangination'
import './GifsContainer.css'
import { focusOn } from '../../utils/utils'

export default function GifsContainer({ children }) {
  const containerRef = useRef(null)

  useEffect(() => {
    focusOn(containerRef.current)
  }, [])

  return (
    <Fragment>
      <section className="gifs-container" ref={containerRef}>
        {children}
      </section>
      <Pangination />
    </Fragment>
  )
}
