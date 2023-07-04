import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import Form from '../Form/Form';
import GifsContainer from '../GifsContainer/GifsContainer';
import Loading from '../Loading/Loading';
import Pagination from '../Pagination/Pagination';
import { renderGifs } from '../../utils/utils';
import Error from '../Error/Error';
import './Home.css';

export default function Home() {
  const { isLoading, data, loadedData, totalCount, offset } = useSelector(store => store.gifs);

  return (
    <Fragment>
      <Form />
      {totalCount === 0 ? (
        <Error />
      ) : (
        <>
          {loadedData.length > 0 && <GifsContainer>{renderGifs(loadedData)}</GifsContainer>}
          {isLoading ? (
            <Loading />
          ) : (
            isLoading === false && (
              <>
                <GifsContainer>{renderGifs(data)}</GifsContainer>
                {offset <= totalCount && <Pagination type="search" />}
              </>
            )
          )}
        </>
      )}
    </Fragment>
  );
}
