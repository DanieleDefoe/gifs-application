import { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { focusOn } from '../../utils/utils'
import Form from '../Form/Form'
import Gif from '../Gif/Gif'
import GifsContainer from '../GifsContainer/GifsContainer'
import Loading from '../Loading/Loading'
import Pagination from '../Pagination/Pagination'
import './Home.css'

export default function Home() {
  const { isLoading, data } = useSelector((store) => store.gifs)

  return (
    <Fragment>
      <Form />
      {isLoading ? (
        <Loading />
      ) : (
        isLoading === false && (
          <>
            <GifsContainer onLoad={focusOn}>
              {data.map(({ id, embed_url }) => {
                return <Gif key={id} embed_url={embed_url} />
              })}
            </GifsContainer>
            <Pagination type="search" />
          </>
        )
      )}
    </Fragment>
  )
}
