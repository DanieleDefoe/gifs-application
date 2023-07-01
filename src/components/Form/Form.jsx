import { useSelector, useDispatch } from 'react-redux'
import { resetForm } from '../../store/formSlice'
import { getSearchGifs } from '../../store/gifsSlice'
import Input from '../Input/Input'
import './Form.css'

export default function Form() {
  const dispatch = useDispatch()
  const { search: searchError } = useSelector((store) => store.form.errors)
  const { search: searchValue } = useSelector((store) => store.form.values)
  const { isValid } = useSelector((store) => store.form)

  function onReset() {
    dispatch(resetForm())
  }

  function onSubmit(event) {
    event.preventDefault()
    dispatch(getSearchGifs(searchValue))
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      <fieldset className="form__field">
        <Input />
        {searchError && (
          <span className="form__input-error">{searchError}</span>
        )}
      </fieldset>
      <ul className="form__buttons">
        <li className="form__button-item">
          <button
            className="form__button form__button-close"
            type="reset"
            onClick={onReset}
          />
        </li>
        <li className="form__button-item">
          <button
            className="form__button form__button-search"
            type="submit"
            disabled={!isValid}
          />
        </li>
      </ul>
    </form>
  )
}
