import Button from '../Button/Button';
import Input from '../Input/Input';

import './Form.css';

export default function Form() {
  return (
    <section className="search">
      <form className="form">
        <Input />
        <button className="form__button form__button-close"></button>
        <button className="form__button form__button-search"></button>
      </form>
      <Button />
    </section>
  );
}
