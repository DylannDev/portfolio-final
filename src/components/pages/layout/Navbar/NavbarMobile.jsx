import { useState } from "react";
import Logo from "../../../reusable-ui/Logo";
import MenuBurger from "./MenuBurger";
import NavbarLinksMobile from "./NavbarLinksMobile";

export default function NavbarMobile() {
  const [isMenuActive, setIsMenuActive] = useState(false);
  return (
    <header className="lg:hidden flex justify-between items-center h-40 absolute top-0 left-0 right-0">
      <Logo />
      <MenuBurger
        isMenuActive={isMenuActive}
        onClick={() => setIsMenuActive(!isMenuActive)}
      />
      <NavbarLinksMobile isMenuActive={isMenuActive} />
    </header>
  );
}
