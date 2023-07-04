import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRandom } from '../../store/randomSlice';
import Button from '../Button/Button';
import Gif from '../Gif/Gif';
import Loading from '../Loading/Loading';
import './Random.css';

export default function Random() {
  const { isLoading, data } = useSelector(store => store.random);
  const dispatch = useDispatch();

  useEffect(() => {
    handleRandom();
  }, []);

  function handleRandom() {
    dispatch(getRandom());
  }

  return (
    <section className="random">
      {isLoading ? (
        <Loading />
      ) : (
        isLoading === false && (
          <>
            <Gif images={data.images} props={'random__gif'} url={data.url} />
            <Button props={'random__button-more'} onClick={handleRandom} />
          </>
        )
      )}
    </section>
  );
}
