import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import Layout from '../Layout/Layout'
import './App.css'

const routes = createRoutesFromElements(
  <Route path="/gifs-application/" element={<Layout />}>
    <Route index element={<p>goirsjhiorwsjgkslgjs</p>} />
  </Route>,
)
const router = createBrowserRouter(routes)

export default function App() {
  return <RouterProvider router={router} />
}
