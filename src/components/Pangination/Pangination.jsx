import Button from '../Button/Button';
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
        <Button props={'pangination__button-arrow pangination__button-arrow_back'} />
        <ul className="pangination__list">
          <li className="pangination__list-number">1</li>
          <li className="pangination__list-number">2</li>
          <li className="pangination__list-number">3</li>
          <li className="pangination__list-number">4</li>
          <li className="pangination__list-number">5</li>
          <li className="pangination__list-number">6</li>
          <li className="pangination__list-number">7</li>
          <li className="pangination__list-number">8</li>
        </ul>
        <Button props={'pangination__button-arrow pangination__button-arrow_next'} />
      </div>
    </section>
  );
}
