import './Button.css';

export default function Button({ props, type, onClick, disabled }) {
  return (
    <button
      className={`button ${props}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    ></button>
  );
}
