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
      }, 300);

    setMenuClicked(true);
  };

  return (
    <header className="max-w-7xl xl:px-[50px] px-5 h-40 absolute z-10 top-0 left-0 right-0">
      <div className="flex justify-between items-center h-full relative">
        <Logo />
        <MenuBurger isMenuActive={isMenuActive} onClick={handleMenuClicked} />
        <NavbarLinksMobile
          isMenuActive={isMenuActive}
          setIsMenuActive={setIsMenuActive}
          menuClicked={menuClicked}
          setMenuClicked={setMenuClicked}
          darkMode={darkMode}
        />
      </div>
    </header>
  );
}
