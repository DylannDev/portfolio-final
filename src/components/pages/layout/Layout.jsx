import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Contact from "./Contact";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="max-w-7xl mx-auto relative">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Contact />
      <Footer />
    </div>
  );
}
