import { useEffect, useRef } from 'react';
import './Gif.css';

export default function Gif({ images, onLoad, props }) {
  const gifRef = useRef(null);

  useEffect(() => {
    if (onLoad) {
      onLoad(gifRef.current);
    }
  }, []);

  return <img src={images.downsized.url} alt="гифки" className={`gif ${props}`} />;
}
