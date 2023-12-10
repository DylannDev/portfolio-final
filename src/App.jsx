import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/pages/home/Home";
import Work from "./components/pages/work/Work.jsx";
import ErrorPage from "./components/pages/error/ErrorPage";
import Layout from "./components/pages/layout/Layout.jsx";

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/work",
          element: <Work />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
