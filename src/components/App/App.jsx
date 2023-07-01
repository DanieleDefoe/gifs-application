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
<<<<<<< HEAD
    <Route index element={<></>} />
    <Route path="trendings" element={<h1>TRENDINGS</h1>} />
    <Route path="random" element={<h1>Random GIF</h1>} />
  </Route>,
)

const router = createBrowserRouter(routes)
=======
    <Route index element={<p>видео</p>} />
  </Route>
);
const router = createBrowserRouter(routes);
>>>>>>> 8e3dd0df4ab6e35ba9fb89c6971074c3e648e0e1

export default function App() {
  return <RouterProvider router={router} />;
}
