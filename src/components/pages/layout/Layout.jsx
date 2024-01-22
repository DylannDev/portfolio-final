import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Contact from "./Contact";
import Footer from "./Footer";

export default function Layout() {
  return (
    <>
      <ScrollRestoration />
      <div className="max-w-7xl md:px-[50px] px-5 mx-auto">
        <div className="relative md:px-[50px] px-5">
          <Navbar />
        </div>
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
