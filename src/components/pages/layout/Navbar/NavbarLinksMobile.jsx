/* eslint-disable react/prop-types */
import NavbarLinks from "./NavbarLinks";
import ToggleButton from "./ToggleButton";
import Card from "../../../reusable-ui/Card";
import SocialMediaLinks from "../../../reusable-ui/SocialMediaLinks";

export default function NavbarLinksMobile({
  isMenuActive,
  setIsMenuActive,
  menuClicked,
  setMenuClicked,
  darkMode,
}) {
  const handleClickOnDiv = () => {
    setIsMenuActive(false);

    setTimeout(() => {
      setMenuClicked(false);
    }, 300);
  };
  return (
    <>
      {isMenuActive && (
        <div
          className={`z-[11] inset-0 h-[100dvh] opacity-75 fixed ${
            darkMode ? "dark-theme" : "bg-white"
          }`}
          onClick={handleClickOnDiv}
        />
      )}
      {menuClicked && (
        <Card
          className={`flex flex-col absolute z-20 top-8 left-0 right-0 bg-white shadow-md rounded-3xl py-8 px-6 ${
            isMenuActive ? "slide-in-left" : "slide-out-left"
          } ${darkMode ? "dark-theme" : "bg-white"}`}
        >
          <div className="pb-8">
            <NavbarLinks onClick={() => setIsMenuActive(false)} />
          </div>
          <hr />
          <div className="flex justify-between lg:flex-row items-center gap-3 pt-8">
            <SocialMediaLinks />
            <ToggleButton />
          </div>
        </Card>
      )}
    </>
  );
}
