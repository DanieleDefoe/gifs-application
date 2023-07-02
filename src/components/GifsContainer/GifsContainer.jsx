import { useSelector } from 'react-redux'
import Gif from '../Gif/Gif'
import './GifsContainer.css'

export default function GifsContainer() {
  const { data } = useSelector((store) => store.gifs)

  return (
    <section className="gifs-container">
      {data.map(({ id, title, embed_url, username }) => {
        return (
          <Gif
            key={id}
            title={title}
            embed_url={embed_url}
            username={username}
          />
        )
      })}
    </section>
  )
}
