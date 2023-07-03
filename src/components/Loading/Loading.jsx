import { useEffect, useRef } from 'react'
import './Loading.css'
import { focusOn } from '../../utils/utils'

export default function Loading() {
  const loadingRef = useRef(null)

  useEffect(() => {
    focusOn(loadingRef.current)
  }, [])

  return (
    <section className="loading" ref={loadingRef}>
      <div className="loading__container">
        <div className="loading__panda">
          <div className="loading__panda-contain">
            <div className="loading__panda-ears"></div>
            <div className="loading__panda-head">
              <div className="loading__panda-eyes"></div>
              <div className="loading__panda-nose"></div>
            </div>
          </div>
          <div className="loading__panda-arms"></div>
          <div className="loading__panda-body"></div>
          <div className="loading__panda-legs"></div>
        </div>
      </div>
      <div className="loading__panda-shadow"></div>
    </section>
  )
}
