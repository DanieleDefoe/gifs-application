import Gif from '../components/Gif/Gif';

export function focusOn(element) {
  element.scrollIntoView();
}

export function renderGifs(data) {
  return data.map(({ id, images }, index) => {
    return <Gif key={id + Date.now() + index} images={images} />;
  });
}
