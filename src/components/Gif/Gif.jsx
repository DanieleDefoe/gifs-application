import './Gif.css'

export default function Gif({ embed_url }) {
  return (
    <>
      <div
        style={{
          width: '100%',
          height: 0,
          paddingBottom: '56%',
          position: 'relative',
        }}
      >
        <iframe
          src={embed_url}
          style={{ position: 'absolute' }}
          className="gif"
          allowFullScreen
        />
      </div>
    </>
  )
}
