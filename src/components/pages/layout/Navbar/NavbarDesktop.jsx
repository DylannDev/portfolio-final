import Logo from "../../../reusable-ui/Logo";
import NavbarLinks from "./NavbarLinks";
import ToggleButton from "./ToggleButton";
import SocialMediaLinks from "../../../reusable-ui/SocialMediaLinks";

export default function NavbarDesktop() {
  return (
    <header className="lg:flex hidden justify-between items-center h-40 absolute top-0 left-0 right-0 border-b-[1px] border-slate-200 ">
      <Logo />
      <NavbarLinks />
      <div className="flex items-center gap-3">
        <SocialMediaLinks minified />
        <ToggleButton />
      </div>
    </header>
  );
}
