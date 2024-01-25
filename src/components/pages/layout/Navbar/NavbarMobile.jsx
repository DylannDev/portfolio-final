import { useContext, useState } from "react";
import Logo from "../../../reusable-ui/Logo";
import MenuBurger from "./MenuBurger";
import NavbarLinksMobile from "./NavbarLinksMobile";
import { DarkModeContext } from "../../../../context/DarkModeContext";

export default function NavbarMobile() {
  const { darkMode } = useContext(DarkModeContext);
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [menuClicked, setMenuClicked] = useState(false);

  const handleMenuClicked = () => {
    setIsMenuActive(!isMenuActive);

    if (isMenuActive)
      setTimeout(() => {
        setMenuClicked(false);
      }, 600);

    setMenuClicked(true);
  };

  return (
    <header className="lg:hidden flex justify-between items-center h-40 absolute top-0 left-0 right-0">
      <Logo />
      <MenuBurger isMenuActive={isMenuActive} onClick={handleMenuClicked} />
      <NavbarLinksMobile
        isMenuActive={isMenuActive}
        setIsMenuActive={setIsMenuActive}
        menuClicked={menuClicked}
        setMenuClicked={setMenuClicked}
        darkMode={darkMode}
      />
    </header>
  );
}
