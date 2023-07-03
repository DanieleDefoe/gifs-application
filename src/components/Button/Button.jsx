import './Button.css'

export default function Button({ props, type, onClick, disabled, children }) {
  return (
    <button
      className={`button ${props}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
