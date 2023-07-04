import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import Button from "../Button/Button";
import "./Navbar.css";

export default function Navbar() {
  const { searchParams } = useSelector((store) => store.gifs);

  function handleActiveLink({ isActive }) {
    return isActive ? "nav__link nav__link_active" : "nav__link";
  }

  return (
    <nav className="nav">
      <ul className="nav__links">
        <li>
          <NavLink
            to={`/gifs-application/${searchParams}`}
            className={handleActiveLink}
          >
            <Button props="nav__button-link">Поиск</Button>
          </NavLink>
        </li>
        <li>
          <NavLink to="trendings" className={handleActiveLink}>
            <Button props="nav__button-link">Тренды</Button>
          </NavLink>
        </li>
        <li>
          <NavLink to="random" className={handleActiveLink}>
            <Button props="nav__button-link">Рандом</Button>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
