import { Fragment } from 'react'
import { useSelector } from 'react-redux'
import Form from '../Form/Form'
import GifsContainer from '../GifsContainer/GifsContainer'
import Loading from '../Loading/Loading'
import Pagination from '../Pagination/Pagination'
import { renderGifs } from '../../utils/utils'
import './Home.css'

export default function Home() {
  const { isLoading, data, loadedData } = useSelector((store) => store.gifs)

  return (
    <Fragment>
      <Form />
      <GifsContainer>{renderGifs(loadedData)}</GifsContainer>
      {isLoading ? (
        <Loading />
      ) : (
        isLoading === false && (
          <>
            <GifsContainer>{renderGifs(data)}</GifsContainer>
            <Pagination type="search" />
          </>
        )
      )}
    </Fragment>
  )
}
