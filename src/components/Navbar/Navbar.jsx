import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './Navbar.css'

export default function Navbar() {
  const { searchParams } = useSelector((store) => store.gifs)

  function handleActiveLink({ isActive }) {
    return isActive ? 'nav__link nav__link_active' : 'nav__link'
  }

  return (
    <nav className="nav">
      <ul className="nav__links">
        <li>
          <NavLink
            to={`/gifs-application/${searchParams}`}
            className={handleActiveLink}
          >
            Поиск
          </NavLink>
        </li>
        <li>
          <NavLink to="trendings" className={handleActiveLink}>
            Тренды
          </NavLink>
        </li>
        <li>
          <NavLink to="random" className={handleActiveLink}>
            Случайный гиф
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
