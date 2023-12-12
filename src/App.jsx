import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/pages/home/Home";
import WorkPage from "./components/pages/work/WorkPage.jsx";
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
          element: <WorkPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
