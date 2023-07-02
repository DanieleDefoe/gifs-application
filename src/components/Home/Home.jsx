import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import Form from '../Form/Form';
import GifsContainer from '../GifsContainer/GifsContainer';
import Loading from '../Loading/Loading';
import './Home.css';

export default function Home() {
  const { isLoading } = useSelector(store => store.gifs);

  return (
    <Fragment>
      <Form />
      {isLoading ? <Loading /> : <GifsContainer />}
    </Fragment>
  );
}
