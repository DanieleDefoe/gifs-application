import { Fragment, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getTrendings } from '../../store/trendingsSlice'
import GifsContainer from '../GifsContainer/GifsContainer'
import Loading from '../Loading/Loading'
import Gif from '../Gif/Gif'
import './Trendings.css'

export default function Trendings() {
  const { isLoading, data } = useSelector((store) => store.trendings)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTrendings())
  }, [])

  return (
    <Fragment>
      {isLoading ? (
        <Loading />
      ) : (
        isLoading === false && (
          <GifsContainer>
            {data.map(({ id, embed_url }) => (
              <Gif key={id} embed_url={embed_url} />
            ))}
          </GifsContainer>
        )
      )}
    </Fragment>
  )
}
