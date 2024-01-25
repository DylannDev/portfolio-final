import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/pages/home/Home";
import WorkPage from "./components/pages/work/WorkPage.jsx";
import ErrorPage from "./components/pages/error/ErrorPage";
import Layout from "./components/pages/layout/Layout.jsx";
import { useContext } from "react";
import { DarkModeContext } from "./context/DarkModeContext.jsx";
import About from "./components/pages/about/About.jsx";
import Project from "./components/pages/work/Projects/Project.jsx";
import SkillsPage from "./components/pages/skills/skillsPage.jsx";

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
        {
          path: "/work/:id",
          element: <Project />,
        },
        {
          path: "/skills",
          element: <SkillsPage />,
        },
        {
          path: "/about",
          element: <About />,
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
