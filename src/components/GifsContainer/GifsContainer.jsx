import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import Pangination from '../../Pangination/Pangination';
import Gif from '../Gif/Gif';
import './GifsContainer.css';

export default function GifsContainer() {
  const { data } = useSelector(store => store.gifs);

  return (
    <Fragment>
      <section className="gifs-container">
        {data.map(({ id, title, embed_url, username }) => {
          return <Gif key={id} title={title} embed_url={embed_url} username={username} />;
        })}
      </section>
      <Pangination />
    </Fragment>
  );
}
