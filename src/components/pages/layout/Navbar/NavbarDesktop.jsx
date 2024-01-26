import Logo from "../../../reusable-ui/Logo";
import NavbarLinks from "./NavbarLinks";
import ToggleButton from "./ToggleButton";
import SocialMediaLinks from "../../../reusable-ui/SocialMediaLinks";

export default function NavbarDesktop() {
  return (
    <header className="max-w-7xl xl:px-[50px] px-5 h-40 absolute z-10 top-0 left-0 right-0">
      <div className="flex justify-between items-center h-full border-b-[1px] border-slate-200">
        <Logo />
        <NavbarLinks />
        <div className="flex items-center gap-3">
          <SocialMediaLinks minified />
          <ToggleButton />
        </div>
      </div>
    </header>
  );
}
