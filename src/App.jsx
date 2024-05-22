import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Country from "./components/Country";
import Layout from "./components/Layout";
import { loader as homeLoader } from "./components/Home";
import NotFound from "./components/NotFound";
import ErrorElement from "./components/ErrorElement";
import { getData } from "./api.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: homeLoader,
        errorElement: <ErrorElement />,
      },
      {
        path: ":name",
        element: <Country />,
        loader: ({ params }) => {
          return getData(`https://restcountries.com/v3.1/alpha/${params.name}`);
        },
        errorElement: <ErrorElement />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
