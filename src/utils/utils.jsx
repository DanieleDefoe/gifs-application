import Gif from '../components/Gif/Gif';

export function focusOn(element) {
  element.scrollIntoView();
}

export function renderGifs(data) {
  return data.map(({ id, images, url }, index) => {
    return <Gif key={id + Date.now() + index} url={url} images={images} />;
  });
}
