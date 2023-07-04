import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Home/Home";
import Trendings from "../Trendings/Trendings";
import Random from "../Random/Random";
import Error from "../Error/Error";
import "./App.css";

const routes = createRoutesFromElements(
  <Route path="/gifs-application/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="trendings" element={<Trendings />} />
    <Route path="random" element={<Random />} />
    <Route path="*" element={<Error />} />
  </Route>
);

const router = createBrowserRouter(routes);

export default function App() {
  return <RouterProvider router={router} />;
}
