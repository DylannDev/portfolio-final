/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Title from "../../../reusable-ui/Title";
import { navbarLinksData } from "../../../../data/navbarLinksData/navbarLinksData.jsx";

export default function NavbarLinks({ onClick }) {
  return (
    <nav className="flex lg:flex-row flex-col items-start gap-6">
      {navbarLinksData.map((link, index) => (
        <Link
          key={index}
          to={link.to}
          className="hover:underline underline-offset-8"
          onClick={onClick}
        >
          <Title variant="section" label={link.label} className="text-2xl" />
        </Link>
      ))}
    </nav>
  );
}
