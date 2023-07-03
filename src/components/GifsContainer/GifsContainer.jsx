import { Fragment, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { focusOn } from '../../utils/utils'
import './GifsContainer.css'

export default function GifsContainer({ children }) {
  const containerRef = useRef(null)
  const { loadedData } = useSelector((store) => store.gifs)

  useEffect(() => {
    focusOn(containerRef.current)
  }, [loadedData])

  return (
    <Fragment>
      <section className="gifs-container" ref={containerRef}>
        {children}
      </section>
    </Fragment>
  )
}
