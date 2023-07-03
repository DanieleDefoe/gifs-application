import Button from '../Button/Button'
import './Pangination.css'

export default function Pagination() {
  return (
    <Button type="button" disabled={false} props="button_type_show-more">
      Показать еще
    </Button>
  )
}
