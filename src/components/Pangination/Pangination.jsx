import { useDispatch, useSelector } from 'react-redux'
import { getSearchGifs, updateOffset } from '../../store/gifsSlice'
import Button from '../Button/Button'
import './Pangination.css'

export default function Pagination() {
  const dispatch = useDispatch()
  const { search: searchValue } = useSelector((store) => store.form.values)
  const { offset } = useSelector((store) => store.gifs)

  function handlePagination() {
    dispatch(updateOffset())
    dispatch(getSearchGifs({ searchValue, offset: offset + 9 }))
  }

  return (
    <Button
      type="button"
      disabled={false}
      onClick={handlePagination}
      props="button_type_show-more"
    >
      Показать еще
    </Button>
  )
}
