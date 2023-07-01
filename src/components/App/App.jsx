import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from 'react-router-dom';
import Layout from '../Layout/Layout';
import './App.css';

const routes = createRoutesFromElements(
  <Route path="/gifs-application/" element={<Layout />}>
    <Route index element={<h1>Поиск</h1>} />
    <Route path="trendings" element={<h1>TRENDINGS</h1>} />
    <Route path="random" element={<h1>Random GIF</h1>} />
  </Route>
);

const router = createBrowserRouter(routes);

export default function App() {
  return <RouterProvider router={router} />;
}
