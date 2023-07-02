import { NavLink } from 'react-router-dom';
import './Pangination.css';

export default function Pangination() {
  // function handleActiveLink({ isActive }) {
  //   return isActive
  //     ? 'pangination__list-number pangination__list-number_active'
  //     : 'pangination__list-number';
  // }
  return (
    <section className="pangination">
      <div className="pangination__container">
        <ul className="pangination__list">
          <NavLink className="pangination__list-number">Вперед</NavLink>
          <li className="pangination__list-number">1</li>
          <li className="pangination__list-number">2</li>
          <li className="pangination__list-number">3</li>
          <li className="pangination__list-number">4</li>
          <li className="pangination__list-number">5</li>
          <li className="pangination__list-number">6</li>
          <li className="pangination__list-number">7</li>
          <li className="pangination__list-number">8</li>
          <NavLink className="pangination__list-number">Назад</NavLink>
        </ul>
      </div>
    </section>
  );
}
