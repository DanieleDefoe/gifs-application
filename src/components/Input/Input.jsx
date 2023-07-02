import { forwardRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleChange, setInitialValues } from '../../store/formSlice'
import './Input.css'

const Input = forwardRef(function (props, ref) {
  const dispatch = useDispatch()
  const { search: searchValue } = useSelector((store) => store.form.values)

  useEffect(() => {
    dispatch(
      setInitialValues({
        search: searchValue || '',
      }),
    )
  }, [])

  function onChange(event) {
    const { target } = event
    const { name, value, validationMessage } = target
    const isValid = target.closest('form').checkValidity()
    dispatch(
      handleChange({
        name,
        value,
        validationMessage,
        isValid,
      }),
    )
  }

  return (
    <input
      type="text"
      ref={ref}
      className="form__input"
      value={searchValue || ''}
      name="search"
      required
      minLength={2}
      placeholder="Поиск..."
      onChange={onChange}
    />
  )
})

export default Input
