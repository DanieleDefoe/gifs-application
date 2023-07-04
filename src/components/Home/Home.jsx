import { Fragment, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Form from '../Form/Form';
import GifsContainer from '../GifsContainer/GifsContainer';
import Loading from '../Loading/Loading';
import Pagination from '../Pagination/Pagination';
import { getSearchGifs } from '../../store/gifsSlice';
import { renderGifs } from '../../utils/utils';
import Error from '../Error/Error';
import './Home.css';

export default function Home() {
  const { isLoading, data, loadedData, totalCount, offset } = useSelector(store => store.gifs);
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const searchQueryParam = searchParams.get('search');
    if (searchQueryParam) {
      dispatch(getSearchGifs({ searchValue: searchQueryParam, offset: 0 }));
    }
  }, []);

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
