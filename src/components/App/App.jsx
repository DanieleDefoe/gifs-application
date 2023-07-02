import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import Layout from '../Layout/Layout'
import Home from '../Home/Home'
import Trendings from '../Trendings/Trendings'
import './App.css'

const routes = createRoutesFromElements(
  <Route path="/gifs-application/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="trendings" element={<Trendings />} />
    <Route path="random" element={<h1>Random GIF</h1>} />
  </Route>,
)

const router = createBrowserRouter(routes)

export default function App() {
  return <RouterProvider router={router} />
}
