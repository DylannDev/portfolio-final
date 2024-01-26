import useScreenSize from "../../../../hooks/useScreenSize";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";

export default function Navbar() {
  const screenSize = useScreenSize();

  return screenSize.width > 1024 ? <NavbarDesktop /> : <NavbarMobile />;
}
