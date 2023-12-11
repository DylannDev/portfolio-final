import { Link } from "react-router-dom";
import Title from "../../../reusable-ui/Title";

export default function NavbarLinks() {
  return (
    <div className="flex gap-3 text-2xl">
      <Link to="/" className="hover:underline underline-offset-8">
        <Title label="Home" />
      </Link>
      <Link to="/work" className="hover:underline underline-offset-8">
        <Title label="Work" />
      </Link>
      <Link to="/work" className="hover:underline underline-offset-8">
        <Title label="About Me" />
      </Link>
    </div>
  );
}
