import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/pages/home/Home";
import WorkPage from "./components/pages/work/WorkPage.jsx";
import ErrorPage from "./components/pages/error/ErrorPage";
import Layout from "./components/pages/layout/Layout.jsx";
import { useContext } from "react";
import { DarkModeContext } from "./context/DarkModeProvider.jsx";

function App() {
  const { darkMode } = useContext(DarkModeContext);
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

  return (
    <div className={`${darkMode && "dark-theme"}`}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
