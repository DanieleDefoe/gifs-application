import { useRef } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { resetForm } from '../../store/formSlice'
import {
  getSearchGifs,
  clearSearch,
  clearTotalCount,
  clearLoading,
  updateSearchParams,
} from '../../store/gifsSlice'
import Button from '../Button/Button'
import Input from '../Input/Input'
import './Form.css'

export default function Form() {
  const inputRef = useRef(null)
  const dispatch = useDispatch()
  const [searchParams, setSearchParams] = useSearchParams()
  const { search: searchError } = useSelector((store) => store.form.errors)
  const { search: searchValue } = useSelector((store) => store.form.values)
  const { offset } = useSelector((store) => store.gifs)
  const { isValid } = useSelector((store) => store.form)

  function onReset() {
    inputRef.current.focus()
    setSearchParams({})
    dispatch(clearTotalCount())
    dispatch(clearLoading())
    dispatch(clearSearch())
    dispatch(updateSearchParams(''))
    dispatch(resetForm())
  }

  function onSubmit(event) {
    event.preventDefault()
    inputRef.current.blur()
    setSearchParams({ search: searchValue })
    dispatch(updateSearchParams(`?search=${searchValue}`))
    dispatch(clearSearch())
    dispatch(
      getSearchGifs({
        searchValue: searchParams.get('search') || searchValue,
        offset,
      }),
    )
  }

  return (
    <form className="form" onSubmit={onSubmit} onReset={onReset} noValidate>
      <fieldset className="form__field">
        <Input ref={inputRef} />
        {searchError && (
          <span className="form__input-error">{searchError}</span>
        )}
      </fieldset>
      <ul className="form__buttons">
        <li className="form__button-item">
          <Button props={'form__button-close'} type="reset" disabled={false} />
        </li>
        <li className="form__button-item">
          <Button
            props={'form__button-search'}
            type="submit"
            disabled={!isValid}
          />
        </li>
      </ul>
    </form>
  )
}
