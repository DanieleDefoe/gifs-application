import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

const routes = createRoutesFromElements(
  <Route path="/gifs-application/">
    <Route index element={<h1>HELLO REACT ROUTER DOM (AGAIN...)</h1>} />
  </Route>,
)
const router = createBrowserRouter(routes)

export default function App() {
  return <RouterProvider router={router} />
}
