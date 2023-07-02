import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRandom } from '../../store/randomSlice';
import Gif from '../Gif/Gif';
import Loading from '../Loading/Loading';
import './Random.css';

export default function Random() {
  const { isLoading, data } = useSelector(store => store.random);
  console.log(data, isLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRandom());
  }, []);

  return (
    <section className="random">
      {isLoading ? <Loading /> : isLoading === false && <Gif embed_url={data.embed_url} />}
    </section>
  );
}
