import { useEffect, useRef } from 'react';
import './Gif.css';

export default function Gif({ images, onLoad, props, url }) {
  const gifRef = useRef(null);

  useEffect(() => {
    if (onLoad) {
      onLoad(gifRef.current);
    }
  }, []);

  return (
    <a href={url} className="gif__link" rel="noreferrer noopener nofollow" target="_blank">
      <img src={images.downsized.url} alt="гифки" className={`gif ${props}`} />;
    </a>
  );
}
