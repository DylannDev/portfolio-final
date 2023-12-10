import NavbarLinks from "./NavbarLinks";
import Logo from "../../../reusable-ui/Logo";
import NavbarSocials from "./NavbarSocials";

export default function Navbar() {
  return (
    <div className="flex justify-between">
      <Logo />
      <NavbarLinks />
      <NavbarSocials />
    </div>
  );
}
