import { Link } from "react-router-dom";
import Title from "../../../reusable-ui/Title";
import { NavbarLinksData } from "../../../../NavbarLinksData/NavbarLinksData";

export default function NavbarLinks() {
  return (
    <nav className="flex gap-3">
      {NavbarLinksData.map((link, index) => (
        <Link
          key={index}
          to={link.to}
          className="hover:underline underline-offset-8"
        >
          <Title label={link.label} size="text-2xl" />
        </Link>
      ))}
    </nav>
  );
}
