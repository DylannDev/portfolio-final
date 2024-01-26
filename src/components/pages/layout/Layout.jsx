import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Contact from "./Contact";
import Footer from "./Footer";

export default function Layout() {
  return (
    <>
      <ScrollRestoration />
      <div className="max-w-7xl xl:px-[50px] px-5 mx-auto fade-in relative">
        <Navbar />
        <main>
          <Outlet />
        </main>
        <div className="relative">
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
}
