import { useSelector, useDispatch } from 'react-redux'

import './Main.css'

export default function Main({ children }) {
  const dispatch = useDispatch()
  useSelector((store) => {
    console.log(store)
  })

  return <main className="main">{children}</main>
}
