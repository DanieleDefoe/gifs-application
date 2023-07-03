import { useEffect, useRef } from 'react'
import './Gif.css'

export default function Gif({ embed_url, onLoad }) {
  const gifRef = useRef(null)

  useEffect(() => {
    if (onLoad) {
      onLoad(gifRef.current)
    }
  }, [])

  return (
    <div
      style={{
        width: '100%',
        height: 0,
        paddingBottom: '56%',
        position: 'relative',
      }}
      ref={gifRef}
    >
      <iframe
        src={embed_url}
        style={{ position: 'absolute' }}
        className="gif"
        allowFullScreen
      />
    </div>
  )
}
