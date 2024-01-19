import { Link } from "react-router-dom";
import Title from "../../../reusable-ui/Title";
import { navbarLinksData } from "../../../../data/navbarLinksData/navbarLinksData";

export default function NavbarLinks() {
  return (
    <nav className="flex gap-3">
      {navbarLinksData.map((link, index) => (
        <Link
          key={index}
          to={link.to}
          className="hover:underline underline-offset-8"
        >
          <Title variant="section" label={link.label} className="text-2xl" />
        </Link>
      ))}
    </nav>
  );
}
