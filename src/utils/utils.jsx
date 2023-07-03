import Gif from '../components/Gif/Gif'

export function focusOn(element) {
  element.scrollIntoView()
}

export function renderGifs(data) {
  return data.map(({ id, embed_url }, index) => {
    return <Gif key={id + Date.now() + index} embed_url={embed_url} />
  })
}
