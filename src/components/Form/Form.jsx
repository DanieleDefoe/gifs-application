import Input from '../Input/Input';

import './Form.css';

export default function Form() {
  return (
    <form className="form">
      <Input />
      <button className="form__button form__button-close"></button>
      <button className="form__button form__button-search"></button>
    </form>
  );
}
