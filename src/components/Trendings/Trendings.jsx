import { Fragment, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getTrendings } from '../../store/trendingsSlice'
import { renderGifs } from '../../utils/utils'
import GifsContainer from '../GifsContainer/GifsContainer'
import Loading from '../Loading/Loading'
import Gif from '../Gif/Gif'
import Pagination from '../Pagination/Pagination'
import './Trendings.css'

export default function Trendings() {
  const { isLoading, data, loadedData } = useSelector(
    (store) => store.trendings,
  )
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTrendings(0))
  }, [])

  return (
    <Fragment>
      <GifsContainer>{renderGifs(loadedData)}</GifsContainer>
      {isLoading ? (
        <Loading />
      ) : (
        isLoading === false && (
          <>
            <GifsContainer>{renderGifs(data)}</GifsContainer>
            <Pagination type="trendings" />
          </>
        )
      )}
    </Fragment>
  )
}
